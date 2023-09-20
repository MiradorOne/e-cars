import React from "react";

import AvatarImg from "./../../Assets/Ellipse 1.png";
interface FeedBackProps {
  carName: string;
  feedbackRating: number;
  text: string;
  // userAvatar: image;
  userName: string;
}

const Feedback = () => {
  return (
    <div className="shadow:21l w-full max-w-[360px] items-center rounded-lg border-slate-50	bg-white lg:p-8">
      <div className="">
        <img className="mr-4 h-[40px] w-[40px]" src={AvatarImg} alt="" />
        <div className="flex w-full justify-between min-[320px]:flex-col-reverse">
          <div>
            <h3 className="font-semibold">Robert Fox</h3>
            <p>BMW M850</p>
          </div>
          <div className="flex"></div>
        </div>
        <p className="min-[320px]:mt-4 md:mt-6">
          “Adipiscing at in tellus integer. Pellentesque massa placerat duis
          ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo.
          Venenatis cras sed felis eget. Duis ultricies lacus sed turpis
          tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit
          amet cursus sit amet dictum sit. Consequat interdum varius sit amet
          mattis vulputate enim nulla.”
        </p>
      </div>
    </div>
  );
};

export default Feedback;
