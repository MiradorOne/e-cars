import React, { useContext } from "react";

import PostTag from "~/components/BlogPage/PostTag";

import { Prisma } from "@prisma/client";
import { BlogContext } from "~/routes/blog";

interface PostProps extends Prisma.PostCreateInput {
  categoryId: string;
  isMiniature?: boolean;
  index: number;
}

const Post = ({
  data: {
    body,
    id,
    image,
    featured,
    categoryId,
    tags,
    title,
    views,
    updatedAt,
    createdAt,
  },
  isMiniature,
}: {
  data: PostProps;
}) => {
  const categories = useContext(BlogContext);

  const currentCategory = categories.find(
    (category) => category.id === categoryId
  );

  return (
    <div className="md:max-h rounded-lg shadow-3xl lg:mb-6">
      <img
        className={
          isMiniature ? "rounded-t-lg lg:max-w-[160px]" : "rounded-t-lg"
        }
        src={image.data}
        alt=""
      />
      <div className="p-4">
        <PostTag category={currentCategory} />
        <h2 className="text-lg font-semibold">{title}</h2>
        {!featured ? <p>{body}</p> : null}
      </div>
    </div>
  );
};

export default Post;
