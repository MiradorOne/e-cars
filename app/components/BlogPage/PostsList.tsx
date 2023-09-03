import React, { useContext } from "react";
import { BlogContext } from "~/routes/blog";
import Post from "~/components/BlogPage/Post";
import type { Prisma } from "@prisma/client";

interface Props {
  data: Prisma.PostCreateInput[];
}

const PostsList = ({ data }: Props) => {
  const categories = useContext(BlogContext);
  return (
    <div className="grid grid-cols-2 gap-6 [&>*:first-child]:col-span-2">
      {data.map((post) => (
        <Post key={post.id} body={post.body} image={post.image.data} />
      ))}
    </div>
  );
};

export default PostsList;
