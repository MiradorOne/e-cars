import React from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { $Enums } from ".prisma/client";
import {
  getAllCategories,
  getAllPostsByCategory,
} from "~/services/PostService";
import BlogPage from "~/pages/BlogPage";
export async function loader({ params }: LoaderArgs) {
  const { category } = params;

  if (!Object.values($Enums.CATEGORY).includes(category as $Enums.CATEGORY)) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return json({
    postsByCategories: await getAllPostsByCategory(category as $Enums.CATEGORY),
    categories: await getAllCategories(),
  });
}
export default function BlogCategory() {
  const data = useLoaderData<typeof loader>();

  return (
    <BlogPage posts={data.postsByCategories} categories={data.categories} />
  );
}
