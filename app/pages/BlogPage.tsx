import React from "react";
import type { Prisma } from "@prisma/client";
import { Link } from "@remix-run/react";
import { $Enums } from ".prisma/client";
import SvgArrowLeft from "~/components/IconComponents/SvgArrowLeft";
import SvgArrowRight from "~/components/IconComponents/SvgArrowRight";
import PostsList from "~/components/BlogPage/PostsList";
import FeaturedPosts from "~/components/BlogPage/FeaturedPosts";
import Heading from "~/components/Heading";
interface Props {
  posts: Prisma.PostCreateInput[];
  categories: { id: string; name: $Enums.CATEGORY }[];
}

const BlogPage = ({ posts, categories }: Props) => {
  const featuredPosts = posts.filter((post) => post.featured);
  const standardPosts = posts.filter((post) => !post.featured);

  return (
    <div>
      <div className="flex w-full justify-between min-[320px]:mb-6 lg:mb-8 lg:max-w-[80%]">
        <div className="flex-wrap items-center min-[320px]:hidden lg:flex">
          <h3 className=" mr-6 font-semibold">Categories:</h3>
          <Link
            to="/blog"
            prefetch="intent"
            className="font-medium text-[#3C7D46]"
          >
            <span className="mr-6">All</span>
          </Link>
          {categories?.map((category, index) => (
            <Link
              to={`/blog/${category.name}`}
              key={index}
              prefetch="intent"
              className="mr-6 font-medium text-[#3C7D46]"
            >
              {
                (category.name.charAt(0).toUpperCase() +
                  category.name.slice(1)) as string
              }
            </Link>
          ))}
        </div>
        <Heading className="lg:block" intent="maxsize22">
          Featured posts
        </Heading>
        <div className="flex lg:hidden ">
          <SvgArrowLeft className="mr-4" />
          <SvgArrowRight />
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-[1224px] grid-cols-1 lg:grid-cols-blog lg:gap-x-32">
        <PostsList data={standardPosts} />
        <div className="row-start-2	mt-6 flex flex-wrap items-center lg:hidden  ">
          <h3 className=" mr-6 font-semibold">Categories:</h3>
          <Link
            to="/blog"
            prefetch="intent"
            className="font-medium text-[#3C7D46]"
          >
            <span className="mr-6">All</span>
          </Link>
          {categories?.map((category, index) => (
            <Link
              to={`/blog/${category.name}`}
              key={index}
              prefetch="intent"
              className="mr-6 font-medium text-[#3C7D46]"
            >
              {
                (category.name.charAt(0).toUpperCase() +
                  category.name.slice(1)) as string
              }
            </Link>
          ))}
        </div>
        <FeaturedPosts data={featuredPosts} />
      </div>
    </div>
  );
};
export default BlogPage;
