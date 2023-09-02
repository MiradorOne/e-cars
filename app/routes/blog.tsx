import { Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Layout } from "~/components/layout";

import { getAllPosts } from "~/services/PostService";

export async function loader() {
  return json(await getAllPosts());
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return (
    <Layout>
      BLOG
      <Outlet />
    </Layout>
  );
}
