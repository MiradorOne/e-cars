import bcrypt from "bcryptjs";
import type { RegisterUserForm } from "~/services/AuthService/schemas";
import { prisma } from "~/utils/prisma.server";
import { getUserSession } from "~/services/SessionStorage";
import { logout } from "~/services/AuthService";
import { redirect } from "@remix-run/node";

export const createUser = async (user: RegisterUserForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      fullName: user.fullName,
    },
  });
  return { id: newUser.id, email: user.email };
};

export const compareUserPassword = async (
  email: string,
  password: string
): Promise<boolean> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return false;
  }
  return await bcrypt.compare(password, user.password);
};

export const getUserIdByLogin = async (login: string) =>
  await prisma.user.findUnique({
    where: {
      email: login,
    },
  });

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);

  if (typeof userId !== "string") {
    return null;
  }

  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, fullName: true, role: true },
    });
  } catch {
    throw await logout(request);
  }
}
