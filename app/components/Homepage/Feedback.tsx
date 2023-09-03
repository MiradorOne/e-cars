import React from "react";

import { image } from "mdast-util-to-markdown/lib/handle/image";
import avatar from "./../icons/Ellipse 1.png";
interface FeedBackProps {
  carName: string;
  feedbackRating: number;
  text: string;
  // userAvatar: image;
  userName: string;
}

const Feedback = () => {
  return (
    <div className="shadow:21l w-full max-w-[360px] items-center border-slate-50 lg:p-8	">
      <div className="flex">
        <img className="mr-4 h-[40px] w-[40px]" src={avatar} alt="" />
        <div className="flex w-full justify-between min-[320px]:flex-col-reverse">
          <div>
            <h3>Robert Fox</h3>
            <p>BMW M850</p>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
