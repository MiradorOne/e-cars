import React from "react";
import PostsList from "~/components/BlogPage/PostsList";
import FeaturedPosts from "~/components/BlogPage/FeaturedPosts";
import type { Prisma } from "@prisma/client";

interface Props {
  posts: Prisma.PostCreateInput[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <div className="mx-auto grid w-full max-w-[1224px] grid-cols-1 lg:grid-cols-blog lg:gap-x-32">
      <PostsList data={posts} />
      <FeaturedPosts data={posts} />
    </div>
  );
};
export default BlogPage;
