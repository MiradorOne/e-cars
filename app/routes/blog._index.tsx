import { Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Layout } from "~/components/layout";

import { getAllPosts, getAllCategories } from "~/services/PostService";

export async function loader() {
  return json({
    posts: await getAllPosts(),
    categories: await getAllCategories(),
  });
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return (
    <Layout>
      Blog
      <Outlet />
    </Layout>
  );
}
