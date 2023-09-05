import React, { useContext } from "react";
import { BlogContext } from "~/routes/blog";
import Post from "~/components/BlogPage/Post";
import type { Prisma } from "@prisma/client";

interface Props {
  data: Prisma.PostCreateInput[];
}

const PostsList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-6 min-[320px]:grid-cols-1 md:grid-cols-2 lg:[&>*:first-child]:col-span-2">
      {data.map((post) =>
        post.featured === false ? <Post data={post} /> : null
      )}
    </div>
  );
};

export default PostsList;
