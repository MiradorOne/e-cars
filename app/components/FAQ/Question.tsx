import React, { useState } from "react";
import ArrowDownSvg from "~/components/IconComponents/ArrowDownSvg";

interface Props {
  question: string;
  answer?: string;
}

const Question = ({ question, answer }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const openFAQHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className="mx-0 my-3 rounded-[20px] bg-[#F6F5F4]  text-gray-900"
      onClick={openFAQHandler}
    >
      <div className=" flex cursor-pointer  items-center justify-between px-4 py-5 text-[1.2rem] font-semibold transition-all">
        <p>{question}</p>
        <ArrowDownSvg
          className={`ml-4 ${
            isOpen ? "rotate-180 transition-all" : " transition-all"
          }`}
        />
      </div>
      <div
        className={`${
          isOpen
            ? "grid-rows-1 border-t transition-all"
            : "grid-rows-[0] transition-all"
        } grid  overflow-hidden   transition-[grid-template-rows] duration-150`}
      >
        <p className="p-4 transition-all min-[320px]:text-sm md:text-base">
          {answer === undefined
            ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi architecto asperiores assumenda blanditiis "
            : answer}
        </p>
      </div>
    </div>
  );
};

export default Question;
