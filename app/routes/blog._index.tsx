import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  getAllCategories,
  getAllPosts,
  getAllPostsCount,
} from "~/services/PostService";
import BlogPage from "~/pages/BlogPage";

export async function loader() {
  return json({
    posts: await getAllPosts(20, 0),
    totalCount: await getAllPostsCount(),
    categories: await getAllCategories(),
  });
}
export default function BlogCategory() {
  const data = useLoaderData<typeof loader>();
  return <BlogPage posts={data.posts} categories={data.categories} />;
}
