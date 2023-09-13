import { useLoaderData, Outlet, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Layout } from "~/components/layout";
import { getAllCategories } from "~/services/PostService";
import React, { createContext } from "react";
import type { CATEGORY } from "@prisma/client";

export async function loader() {
  return json(await getAllCategories());
}

export const BlogContext = createContext<{ id: string; name: CATEGORY }[]>([]);

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <Layout>
      <BlogContext.Provider value={data}>
        <div className="min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-108px lg:py-12">
          <h1 className="text-[44px] font-semibold">Blog & News</h1>
          <p className="mt-4">
            Company and car market news, as well as car selection guides and car
            reviews from our authors.
          </p>

          <div className="flex w-[370px] justify-between ">
            <h3 className="font-semibold">Categories:</h3>
            <Link
              to="/blog"
              prefetch="intent"
              className="font-medium text-[#3C7D46]"
            >
              All
            </Link>
            {data.map((category, index) => (
              <Link
                to={`${category.name}`}
                key={index}
                prefetch="intent"
                className="font-medium text-[#3C7D46]"
              >
                {category.name as string}
              </Link>
            ))}
          </div>
          <Outlet />
        </div>
      </BlogContext.Provider>
    </Layout>
  );
}
