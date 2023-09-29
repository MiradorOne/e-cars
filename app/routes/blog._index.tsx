import React from "react";
import { json } from "@remix-run/node";
import { getAllPosts, getAllPostsCount } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";
import BlogPage from "~/pages/BlogPage";

export async function loader() {
  return json({
    posts: await getAllPosts(),
    totalCount: await getAllPostsCount(),
  });
}
export default function BlogCategory() {
  const data = useLoaderData<typeof loader>();

  return <BlogPage posts={data.posts} />;
}
