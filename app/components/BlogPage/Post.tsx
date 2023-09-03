import React, { ComponentPropsWithoutRef } from "react";
import car from "~/components/icons/Rectangle 2.png";
import PostTag from "~/components/BlogPage/PostTag";
import { cva, VariantProps } from "class-variance-authority";

import { Prisma } from "@prisma/client";

interface PostsListProps {
  body: string;
  image: string | undefined;
  // categoryId?: string;
  // featured: boolean;
  // id: string;
  //
  // tags: string[];
  //
  // title: string;
  //
  // views: number;
}
const Post = ({ body, image }: PostsListProps) => {
  return (
    <div className="rounded-lg shadow-3xl">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-4">
        <PostTag />
        <h2></h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
