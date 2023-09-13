import React from "react";
import Post from "~/components/BlogPage/Post";
import type { Prisma } from "@prisma/client";

interface PostCreateInputWithCategoryId extends Prisma.PostCreateInput {
  categoryId?: string;
}
interface Props {
  data: PostCreateInputWithCategoryId[];
}
const PostsList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-6 min-[320px]:grid-cols-1 md:grid-cols-2 lg:[&>*:first-child]:col-span-2">
      {data.map((post) =>
        post.featured === false ? (
          <Post key={post.id} data={post} isMiniature={false} />
        ) : null
      )}
    </div>
  );
};

export default PostsList;
