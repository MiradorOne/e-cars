import { Layout } from "~/components/layout";
import Article from "~/pages/Article";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAllPostsByCategory, getPostById } from "~/services/PostService";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { CATEGORY } from "@prisma/client";

import Post from "~/components/BlogPage/Post";

export async function loader({ params }: LoaderArgs) {
  const { category, postId } = params;

  return json({
    postData: await getPostById(postId as string),
    recentPosts: await getAllPostsByCategory(category as CATEGORY, 4),
  });
}

export default function PostArticle() {
  const data = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="min-[320px]:px-4 min-[320px]:py-8 md:px-8	md:py-10 lg:px-[108px] lg:pb-12">
        <Article {...data.postData} />
        <div className="border-t-[#E6E6E6 ] min-[320px]:block md:hidden lg:block">
          <h2 className="md:mt-8 lg:mt-12 lg:text-[29px]">Related Articles</h2>
          <div className=" grid-cols-4 grid-rows-[268px]  gap-6 lg:grid">
            {data.recentPosts.map((post) => (
              <div className=" w-max-[288px] mt-4">
                <Post
                  key={post.id}
                  data={post}
                  isMiniature={false}
                  isFeatured={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
