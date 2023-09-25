import { Prisma } from "@prisma/client";
import { prisma } from "~/utils/prisma.server";
import type { CreatePostArgs } from "~/services/PostService/schemas";
import { createPostInputSchema } from "~/services/PostService/schemas";

export const getAllPosts = async (limit = 20, page = 0) =>
  await prisma.post.findMany({
    take: limit,
    skip: limit * page,
    orderBy: {
      createdAt: "desc",
    },
  });

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

export const createPost = async (postArgs: CreatePostArgs) => {
  createPostInputSchema.parse(postArgs);

  const { title, body, tags, featured = false, category, image } = postArgs;

  try {
    return prisma.post.create({
      data: {
        title,
        body,
        tags,
        featured,
        image: {
          data: image,
        },
        category: {
          connect: {
            name: category,
          },
        },
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(e.message);
    }
  }
};
