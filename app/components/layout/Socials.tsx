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
  console.log(intent);
  return (
    <div className={`flex items-center ${className}`}>
      <FacebookHeader
        className={intent}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <TwitterHeader className={intent} fill={fill} fillOpacity={fillOpacity} />
      <YoutubeHeader className={intent} fill={fill} fillOpacity={fillOpacity} />
      <InstagramHeader
        className={intent}
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </div>
  );
};

export default Socials;
