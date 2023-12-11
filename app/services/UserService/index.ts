import bcrypt from "bcryptjs";
import type { RegisterUserForm } from "~/services/AuthService/schemas";
import { prisma } from "~/utils/prisma.server";

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
