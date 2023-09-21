import type { Prisma } from "@prisma/client";
import { prisma } from "~/utils/prisma.server";

export const getAllPosts = async () => await prisma.post.findMany();

export const getAllCategories = async () =>
  await prisma.postCategory.findMany({
    select: { name: true, id: true },
  });

export const getAllPostsByCategory = async (
  category: Prisma.PostCategoryWhereInput["name"],
  count?: number
) => {
  return prisma.post.findMany({
    where: { category: { name: category } },
    take: count,
  });
};

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
