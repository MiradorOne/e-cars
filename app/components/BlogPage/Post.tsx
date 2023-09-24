import React, { useContext } from "react";
import { Link, useParams } from "@remix-run/react";
import PostTag from "~/components/BlogPage/PostTag";

import type { Prisma } from "@prisma/client";
import { BlogContext } from "~/routes/blog";

interface PostProps extends Prisma.PostCreateInput {
  categoryId?: string;
}
const Post = ({
  data: { body, image, categoryId, title, id },
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
    <div className="md:max-h rounded-lg shadow-3xl">
      <Link to={`/blog/post/${id}`}>
        <img
          className={
            isMiniature
              ? "rounded-t-lg lg:max-w-[160px]"
              : "w-full rounded-t-lg"
          }
          src={image.data}
          alt=""
        />
      </Link>

      <div className="p-4">
        <PostTag
          categoryName={currentCategory ? currentCategory.name : category!}
        />
        <Link to={`/blog/post/${id}`}>
          <h2 className="font-semibold">{title}</h2>
        </Link>
        {!isFeatured ? <p>{body}</p> : null}
      </div>
    </div>
  );
};
export default Post;
