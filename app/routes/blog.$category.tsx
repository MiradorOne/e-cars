import React from "react";
import BlogPage from "~/pages/BlogPage";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAllPostsByCategory } from "~/services/PostService";
import { $Enums } from ".prisma/client";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
  const { category } = params;

  if (!Object.values($Enums.CATEGORY).includes(category as $Enums.CATEGORY)) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return json(await getAllPostsByCategory(category as $Enums.CATEGORY));
}
export default function BlogCategory() {
  const data = useLoaderData<typeof loader>();

  return <BlogPage posts={data} />;
}
