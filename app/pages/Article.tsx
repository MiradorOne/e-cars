import React from "react";

import PostTag from "~/components/BlogPage/PostTag";

import CalendarSvg from "~/components/IconComponents/CalendarSvg";
import ViewsSvg from "~/components/IconComponents/ViewsSvg";
import TagsSvg from "~/components/IconComponents/TagsSvg";
import {
  CopyLinkSvg,
  FooterFacebook,
  FooterTwitter,
} from "~/components/IconComponents";
import LinkedInSvg from "~/components/IconComponents/LinkedInSvg";
import { Button } from "~/components/Button";

import { useParams } from "@remix-run/react";

type Image = {
  type: null;
  data: string;
};

interface ArticleProps {
  body: string;
  categoryId: string;
  createdAt: string;
  featured: boolean;
  id: string;
  image: Image;
  tags: string[];
  title: string;
  updatedAt: string;
  views: number;
}

const Article = ({
  body,

  createdAt,
  image,
  tags,
  title,

  views,
}: ArticleProps) => {
  const creationDate = new Date(createdAt);
  const { category } = useParams();

  return (
    <div className="mx-auto my-0 w-full max-w-article ">
      <h1 className="font-semibold min-[320px]:text-[34px] lg:text-[44px]">
        {title}
      </h1>
      <div className=" flex	flex-wrap items-center">
        <div className="mr-6">
          <PostTag categoryName={category!} />
        </div>
        <div className="mr-6 flex items-center ">
          <span className="mr-2">
            <CalendarSvg />
          </span>
          <span>
            {creationDate.toDateString().split(" ").slice(1).join(" ")}
          </span>
        </div>
        <div className="mr-6 flex items-center">
          <span className="mr-2">
            <ViewsSvg />
          </span>
          <span>{views} views</span>
        </div>
        <div className="mr-6 flex items-center">
          <span className="mr-2">
            <TagsSvg />
          </span>
          <span>{tags.map((tag) => tag + "," + " ")} views</span>
        </div>
      </div>
      <img
        className="w-full min-[320px]:mt-6 md:mt-8"
        src={image.data}
        alt=""
      />
      <p>{body}</p>
      <div className="mt-8 flex h-11 w-full items-center justify-center rounded-lg bg-[#F6F5F4]">
        <div className="flex w-8/12 justify-between">
          <div>Share:</div>
          <div className="flex items-center">
            <span className="md:mr-2">
              <FooterFacebook />
            </span>
            <p className="min-[320px]:hidden md:block">Facebook</p>
          </div>
          <div className="flex items-center">
            <span className="md:mr-2">
              <FooterTwitter />
            </span>
            <p className="min-[320px]:hidden md:block">Twitter</p>
          </div>
          <div className="flex items-center">
            <span className="md:mr-2">
              <LinkedInSvg />
            </span>
            <p className="min-[320px]:hidden md:block">Linkedin</p>
          </div>
          <div className="flex items-center">
            <span className="md:mr-2">
              <CopyLinkSvg />
            </span>
            <p className="min-[320px]:hidden md:block">Copy Link</p>
          </div>
        </div>
      </div>
      <form action="  " className="mt-8 rounded-lg bg-[#F6F5F4] p-8">
        <h2 className="mb-3 text-[22px] font-semibold">Stay up to date</h2>
        <p className="mb-4 text-sm">
          Don't miss the latest news, reviews and guides from our experts. Get
          updates in your inbox. No spam.
        </p>
        <div className="md:flex">
          <input
            type="text"
            placeholder="Email"
            className="h-12 w-full border-[#D1D1D1] px-3 py-4 placeholder:pl-3 md:w-[82%]"
          />
          <Button
            type="button"
            intent="primary"
            size="small"
            className="h-12 w-full min-[320px]:mt-2 md:ml-2 md:mt-0 md:w-[17%]"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Article;
