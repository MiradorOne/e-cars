import React from "react";
import Post from "~/components/BlogPage/Post";
import type { Prisma } from "@prisma/client";

interface Props {
  data: Prisma.PostCreateInput[];
}
const FeaturedPosts = ({ data }: Props) => {
  return (
    <div className=" gap-6 md:grid md:grid-cols-2 lg:block lg:[&>*:not(:first-of-type)]:flex lg:[&>*:not(:last-child)]:mb-4">
      {data?.map((post, index) =>
        post.featured ? (
          <Post
            key={post.id}
            data={post}
            isMiniature={index !== 0}
            isFeatured={post.featured}
          />
        ) : null
      )}
    </div>
  );
};
export default FeaturedPosts;
