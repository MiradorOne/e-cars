import React, { useContext } from "react";
import { Link, useParams } from "@remix-run/react";
import type { Prisma } from "@prisma/client";
import { BlogContext } from "~/routes/blog";
import PostTag from "~/components/BlogPage/PostTag";

interface PostProps extends Prisma.PostCreateInput {
  categoryId?: string;
}
const Post = ({
  data: { body, image, categoryId, title, id },
  isFeatured,
  isMiniature,
  articleCategory,
  maxHeight,
}: {
  isFeatured?: boolean;
  isMiniature?: boolean;
  articleCategory?: string | undefined;
  maxHeight?: string;

  data: PostProps;
}) => {
  let currentCategory;
  const categories = useContext(BlogContext);

  currentCategory = categories.find((category) => category.id === categoryId);

  const { category } = useParams();
  const getImageHeight = (maxHeight: string | undefined) => {
    switch (maxHeight) {
      case "max220":
        return "lg:h-[220px] min-[320px]:h-[192px]";
      case "max160":
        return "h-[160px]";
      case "max190":
        return " min-[320px]:h-192px";
      case "mainBlog":
        return "min-[320px]:h-[192px] lg:h-auto";
      default:
        null;
    }
  };
  return (
    <div className="md:max-h rounded-lg shadow-3xl">
      <Link to={`/blog/post/${id}`}>
        <img
          className={
            isMiniature
              ? " w-full rounded-l-lg min-[320px]:h-[192px] lg:h-[120px] lg:w-[160px] lg:min-w-[160px]"
              : `${getImageHeight(maxHeight)} w-full  rounded-t-lg `
          }
          src={image.data}
          alt=""
        />
      </Link>
      <div className="p-4">
        <PostTag
          categoryName={
            currentCategory
              ? currentCategory.name
              : articleCategory
              ? articleCategory
              : category!
          }
        />
        <Link to={`/blog/post/${id}`}>
          <h2
            className={
              isMiniature ? "mt-2 font-semibold" : "mt-3 font-semibold"
            }
          >
            {title}
          </h2>
        </Link>
        {!isFeatured ? <p>{body}</p> : null}
      </div>
    </div>
  );
};
export default Post;
