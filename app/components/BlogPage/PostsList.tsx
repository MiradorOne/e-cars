import React from "react";
import type { Prisma } from "@prisma/client";
import Post from "~/components/BlogPage/Post";
interface PostCreateInputWithCategoryId extends Prisma.PostCreateInput {
  categoryId?: string;
}
interface Props {
  data: PostCreateInputWithCategoryId[];
}
const PostsList = ({ data }: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 min-[320px]:mt-4 min-[320px]:grid-cols-1 md:mt-6 md:grid-cols-2 lg:mt-0 lg:[&>*:first-child]:col-span-2">
        {data?.map((post) =>
          !post.featured ? (
            <Post
              key={post.id}
              data={post}
              isMiniature={false}
              maxHeight="mainBlog"
            />
          ) : null
        )}
      </div>
    </>
  );
};

export default PostsList;
