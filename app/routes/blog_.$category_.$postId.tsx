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
      <div className="mx-auto w-full max-w-[1224px]	min-[320px]:px-4 min-[320px]:py-8 md:px-8  md:py-10 lg:px-0  lg:pb-12">
        <Article {...data.postData} />
        <div className="border-t-[#E6E6E6 ] min-[320px]:block md:hidden lg:block">
          <h2 className="l g:mt-12  md:mt-8 lg:text-[29px]">
            Related Articles
          </h2>
          <div className="row-gap-4  gap-6 min-[320px]:grid min-[320px]:grid-cols-1 lg:grid lg:grid-cols-4 lg:grid-rows-1">
            {data.recentPosts.map((post) => (
              <Post
                data={post}
                isMiniature={false}
                isFeatured={true}
                key={post.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
