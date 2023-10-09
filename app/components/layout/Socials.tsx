import React from "react";
import {
  FacebookHeader,
  InstagramHeader,
  TwitterHeader,
  YoutubeHeader,
} from "~/components/IconComponents";
interface Props {
  intent: "24px" | "mr-[20px]" | "mr-[16px]";
  className?: string;
  fill?: string;
  fillOpacity?: string;
}
const Socials = ({ intent, className, fill, fillOpacity }: Props) => {
  return (
    <div className={`flex items-center ${className}`}>
      <a href="">
        <FacebookHeader
          className={intent}
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </a>
      <a href="">
        <TwitterHeader
          className={intent}
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </a>
      <a href="">
        <YoutubeHeader
          className={intent}
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </a>
      <a href="">
        <InstagramHeader
          className={intent}
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </a>
    </div>
  );
};

export default Socials;
