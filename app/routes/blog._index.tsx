import { Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Layout } from "~/components/layout";
import { getAllPosts, getAllCategories } from "~/services/PostService";
import BlogPage from "~/pages/BlogPage";
import { createContext, useContext } from "react";
import { Prisma } from "@prisma/client";

export async function loader() {
  return json({
    posts: await getAllPosts(),
    categories: await getAllCategories(),
  });
}
export type GlobalContent = {
  posts: Prisma.PostCreateInput[];
  categories: Prisma.PostCategoryWhereInput[];
};
export const MyGlobalContext = createContext<GlobalContent>({
  posts: [],
  categories: [],
});

export default function Blog() {
  const data = useLoaderData<typeof loader>();

  return (
    <Layout>
      <BlogPage categories={data.categories} posts={data.posts} />
      <Outlet />
    </Layout>
  );
}
