import React from "react";
import { json } from "@remix-run/node";
import { getAllPosts } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";
import BlogPage from "~/pages/BlogPage";

export async function loader() {
  return json(await getAllPosts());
}
export default function BlogCategory() {
  const data = useLoaderData<typeof loader>();
  return <BlogPage posts={data} />;
}
