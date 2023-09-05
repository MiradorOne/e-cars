import React from "react";
import Post from "~/components/BlogPage/Post";

import { Prisma } from "@prisma/client";

interface Props {
  data: Prisma.PostCreateInput[];
}

const FeaturedPosts = ({ data }: Props) => {
  return (
    <div className=" gap-6 md:grid md:grid-cols-2 lg:block lg:[&>*:not(:first-of-type)]:flex">
      {data.map((post, index) =>
        post.featured === true ? (
          <Post data={post} isMiniature={index !== 0} />
        ) : null
      )}
    </div>
  );
};

export default FeaturedPosts;
