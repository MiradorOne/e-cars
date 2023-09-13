import React, { createContext } from "react";
import { json } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import type { CATEGORY } from "@prisma/client";
import { getAllCategories } from "~/services/PostService";
import { Layout } from "~/components/layout";
import Heading from "~/components/Heading";

export async function loader() {
  return json(await getAllCategories());
}
export const BlogContext = createContext<{ id: string; name: CATEGORY }[]>([]);
export default function Blog() {
  const data = useLoaderData<typeof loader>();

  return (
    <Layout>
      <BlogContext.Provider value={data}>
        <div className="mx-auto max-w-[1224px] min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0 lg:py-12">
          <Heading intent="maxsize44">Blog & News</Heading>
          <p className="mt-4 min-[320px]:mb-6 md:mb-8">
            Company and car market news, as well as car selection guides and car
            reviews from our authors.
          </p>
          <Outlet />
        </div>
      </BlogContext.Provider>
    </Layout>
  );
}
