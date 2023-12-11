import { prisma } from "~/utils/prisma.server";
import { json, redirect } from "@remix-run/node";
import { registerUserSchema } from "~/services/AuthService/schemas";
import type { RegisterUserForm } from "~/services/AuthService/schemas";
import {
  createUser,
  compareUserPassword,
  getUserIdByLogin,
} from "~/services/UserService";
import { getUserSession, storage } from "~/services/SessionStorage";

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function register(user: RegisterUserForm) {
  registerUserSchema.parse(user);

  const exists = await prisma.user.count({ where: { email: user.email } });
  if (exists) {
    return json(
      { error: `User already exists with that email` },
      { status: 400 }
    );
  }

  const newUser = await createUser(user);
  if (!newUser) {
    return json(
      {
        error: `Something went wrong trying to create a new user.`,
        fields: { email: user.email, password: user.password },
      },
      { status: 400 }
    );
  }
  return redirect("/login");
}

export const signIn = async (login: string, password: string) => {
  const credentialsMatch = await compareUserPassword(login, password);
  if (!credentialsMatch) {
    return json({ error: `Incorrect login` }, { status: 400 });
  }

  const user = await getUserIdByLogin(login);
  if (!user) return json({ error: `Cannot find user` }, { status: 400 });

  return createUserSession(user.id, "/");
};

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
