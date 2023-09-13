import React from "react";
import BlogPage from "~/pages/BlogPage";
import { json } from "@remix-run/node";
import { getAllPosts } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json(await getAllPosts());
}
export default function BlogCategory() {
  const data = useLoaderData<typeof loader>();
  return <BlogPage posts={data} />;
}
