import React, { ComponentPropsWithoutRef } from "react";
import Post from "~/components/BlogPage/Post";
import { Prisma } from "@prisma/client";

interface PostsListProps {
  posts: Prisma.PostCreateInput[];
}
const PostsList = ({ posts }: PostsListProps) => {
  console.log(posts);
  return (
    <div className="grid grid-cols-2 gap-6 [&>*:first-child]:col-span-2">
      {posts.map((post) => (
        <Post key={post.id} body={post.body} image={post.image.data} />
      ))}
    </div>
  );
};

export default PostsList;
