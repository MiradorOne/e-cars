import React from "react";

import AvatarImg from "./../../Assets/Ellipse 1.png";
interface FeedBackProps {
  carName?: string;
  feedbackRating?: number;
  text?: string;

  userName?: string;
  className?: string;
}

const Feedback = ({ className }: FeedBackProps) => {
  return (
    <div
      className={`rounded-lg   bg-white 	shadow-3xl min-[320px]:p-4 lg:p-8 ${className}`}
    >
      <div className="flex items-center ">
        <img className="mr-4 h-[40px] w-[40px]" src={AvatarImg} alt="" />
        <div className="flex w-full justify-between min-[320px]:flex-col-reverse min-[320px]:items-baseline md:flex-row	  md:items-center">
          <div>
            <h3 className="font-semibold">Robert Fox</h3>
            <p className="text-xs text-gray-500">BMW M850</p>
          </div>
          <div>
            <span className="text-lg text-yellow-400"> &#9733;</span>
            <span className="text-lg text-yellow-400"> &#9733;</span>
            <span className="text-lg text-yellow-400"> &#9733;</span>
            <span className="text-lg text-yellow-400"> &#9733;</span>
            <span className="text-lg text-yellow-400"> &#9733;</span>
          </div>
        </div>
      </div>
      <p className="min-[320px]:mt-4 lg:mt-6">
        “Adipiscing at in tellus integer. Pellentesque massa placerat duis
        ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo.
        Venenatis cras sed felis eget. Duis ultricies lacus sed turpis
        tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit
        amet cursus sit amet dictum sit. Consequat interdum varius sit amet
        mattis vulputate enim nulla.”
      </p>
    </div>
  );
};

export default Feedback;
