import React from "react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  getAllCategories,
  getAllPostsByCategory,
  getPostById,
} from "~/services/PostService";
import { Layout } from "~/components/layout";
import Article from "~/pages/Article";
import Post from "~/components/BlogPage/Post";

export async function loader({ params }: LoaderArgs) {
  const { postId } = params;
  const postData = await getPostById(postId as string);
  const categories = await getAllCategories();
  const currentCategory = categories.find(
    (obj) => obj.id === postData?.categoryId
  );
  const recentPosts = await getAllPostsByCategory(currentCategory?.name);

  return json({
    postData,
    recentPosts,
    categories,
    currentCategory,
  });
}

export default function PostArticle() {
  const data = useLoaderData<typeof loader>();
  const currentCategory = data.categories.find(
    (obj) => obj.id === data.postData?.categoryId
  );
  return (
    <Layout>
      <div className="mx-auto w-full max-w-[1224px]	min-[320px]:px-4 min-[320px]:py-8 md:px-8  md:py-10 lg:px-0  lg:pb-12">
        <Article {...data.postData} category={currentCategory?.name} />
      </div>
      <div>
        <hr className="w-full min-[320px]:mt-8 lg:mt-12 " />
        <div className="mx-auto flex w-full max-w-[1224px] flex-col border-t-[#E6E6E6] min-[320px]:block min-[320px]:px-8 min-[320px]:py-8 md:hidden lg:block lg:px-0 ">
          <h2 className=" min-[320px]:text-[22px] lg:text-[26px]">
            Related Articles
          </h2>
          <div className=" gap-6  min-[320px]:grid min-[320px]:grid-cols-1 lg:grid  lg:grid-cols-4">
            {data?.recentPosts.map((post) => (
              <Post
                data={post}
                articleCategory={currentCategory?.name}
                isMiniature={false}
                isFeatured={true}
                key={post.id}
                maxHeight="max160"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
