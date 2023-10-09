import React, { createContext } from "react";
import { Layout } from "~/components/layout";
import HomePage from "~/pages/HomePage";
import { json } from "@remix-run/node";
import { getAllCategories, getAllPosts } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";
import { CATEGORY } from "@prisma/client";

export async function loader() {
  return json({
    posts: await getAllPosts(3),
    categories: await getAllCategories(),
  });
}
export const HomePageContext = createContext<{ id: string; name: CATEGORY }[]>(
  []
);
export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <Layout>
      <HomePageContext.Provider value={data.categories}>
        <HomePage data={data.posts} />
      </HomePageContext.Provider>
    </Layout>
  );
}
