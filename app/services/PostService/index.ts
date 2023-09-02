import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async () => await prisma.post.findMany();

export const getAllCategories = async () =>
  await prisma.postCategory.findMany({
    select: { name: true },
  });

export const getAllPostsByCategory = async (
  category: Prisma.PostCategoryWhereInput["name"]
) => await prisma.post.findMany({ where: { category: { name: category } } });

export const getPostById = async (id: string) =>
  await prisma.post.findUnique({ where: { id } });

export const createPost = async (postArgs: Prisma.PostCreateInput) => {
  const { title, body, tags, featured, category, image } = postArgs;
  return prisma.post.create({
    data: {
      title,
      body,
      tags,
      featured,
      category,
      image,
    },
  });
};
