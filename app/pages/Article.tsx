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
import ArticleBody from "~/components/BlogPage/ArticleBody";
import Input from "~/components/Input";
import Heading from "~/components/Heading";

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
  category: string | undefined;
}
const Article = ({
  body,
  createdAt,
  image,
  tags = [],
  title,
  views,
  category,
}: ArticleProps) => {
  const creationDate = new Date(createdAt);

  return (
    <div className=" mx-auto   my-0 w-full  max-w-[1224px] ">
      <Heading className="mb-4" intent="maxsize44">
        {title}
      </Heading>
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
          <span>
            {tags.map((tag, index) =>
              index + 1 !== tags.length ? `${tag}, ` : `${tag}`
            )}
          </span>
        </div>
      </div>
      <img
        className="w-full min-[320px]:mb-6 min-[320px]:mt-6 min-[320px]:max-h-[192px] md:mb-8 md:mt-8 md:max-h-[394px] lg:max-h-[450px]"
        src={image.data}
        alt=""
      />
      <ArticleBody body={body} />
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
      <form
        action=""
        className="mt-8 rounded-lg bg-[#F6F5F4] min-[320px]:p-4 md:p-8"
      >
        <h2 className="mb-3 text-[22px] font-semibold">Stay up to date</h2>
        <p className="mb-4 text-sm">
          Don't miss the latest news, reviews and guides from our experts. Get
          updates in your inbox. No spam.
        </p>
        <div className="w-full justify-between md:flex">
          <Input
            type="email"
            placeholder="Email"
            className="h-12 w-full border-[#D1D1D1] px-3 py-4  placeholder:pl-3"
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
