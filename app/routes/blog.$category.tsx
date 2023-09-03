import { Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { $Enums } from ".prisma/client";
import { json } from "@remix-run/node";
import { Layout } from "~/components/layout";

import { getAllPostsByCategory } from "~/services/PostService";

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

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  return (
    <Layout>
      Blog Category
      <Outlet />
    </Layout>
  );
}
