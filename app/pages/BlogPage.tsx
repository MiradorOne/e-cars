import React from "react";
import PostsList from "~/components/BlogPage/PostsList";
import FeaturedPosts from "~/components/BlogPage/FeaturedPosts";
import type { Prisma } from "@prisma/client";

interface Props {
  posts: Prisma.PostCreateInput[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-blog lg:gap-x-32 ">
      <PostsList data={posts} />
      <FeaturedPosts />
    </div>
  );
};

export default BlogPage;
