import React, { useContext } from "react";

import PostTag from "~/components/BlogPage/PostTag";

import { Prisma } from "@prisma/client";
import { BlogContext } from "~/routes/blog";
import { useParams } from "@remix-run/react";

interface PostProps extends Prisma.PostCreateInput {
  categoryId?: string;
}
const Post = ({
  data: { body, image, categoryId, title },
  isFeatured,
  isMiniature,
}: {
  isFeatured?: boolean;
  isMiniature?: boolean;
  data: PostProps;
}) => {
  const categories = useContext(BlogContext);
  const currentCategory = categories.find(
    (category) => category.id === categoryId
  );
  const { category } = useParams();

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
        <PostTag
          categoryName={currentCategory ? currentCategory.name : category!}
        />
        <h2 className=" font-semibold">{title}</h2>
        {!isFeatured ? <p>{body}</p> : null}
      </div>
    </div>
  );
};
export default Post;
