import React from "react";
import PostsList from "~/components/BlogPage/PostsList";
import FeaturedPosts from "~/components/BlogPage/FeaturedPosts";
import type { Prisma } from "@prisma/client";

interface BlogProps {
  categories: Prisma.PostCategoryWhereInput[];
  posts: Prisma.PostCreateInput[];
}

const BlogPage = ({ categories, posts }: BlogProps) => {
  console.log(categories);
  return (
    <div className="min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-108px lg:py-12">
      <h1 className="text-[44px] font-semibold">Blog & News</h1>
      <p className="mt-4">
        Company and car market news, as well as car selection guides and car
        reviews from our authors.
      </p>

      <div className="flex   w-[370px] justify-between ">
        <h3 className="font-semibold">Categories:</h3>
        {categories.map((el, index) => (
          <a key={index} className="font-medium text-[#3C7D46]" href="#">
            {el.name as string}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-blog lg:gap-x-32 ">
        <PostsList posts={posts} />
        <FeaturedPosts />
      </div>
    </div>
  );
};

export default BlogPage;
