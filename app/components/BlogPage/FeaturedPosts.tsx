import React from "react";
import type { Prisma } from "@prisma/client";
import Post from "~/components/BlogPage/Post";
interface Props {
  data: Prisma.PostCreateInput[];
}
const FeaturedPosts = ({ data }: Props) => {
  return (
    <div className="gap-6 min-[320px]:row-start-1  min-[320px]:grid md:grid-cols-2 lg:row-start-auto lg:block lg:[&>*:not(:first-child)]:h-[120px] lg:[&>*:not(:first-of-type)]:flex lg:[&>*:not(:last-child)]:mb-4 ">
      {data?.map((post, index) => (
        <Post
          key={post.id}
          data={post}
          isMiniature={index !== 0}
          isFeatured={post.featured}
          maxHeight="max220"
        />
      ))}
    </div>
  );
};
export default FeaturedPosts;
