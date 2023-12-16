import React, { useState } from "react";
import DropDownIcon from "~/components/IconComponents/DropDownIcon";

interface Props {
  placeholder?: string;
  options?: string[];
  label?: string;
  reset?: boolean;
}

const FilterSelect = ({ placeholder, options, reset, label }: Props) => {
  const [isVisible, setVisible] = useState(false);
  const [currentChoice, setCurrentChoice] = useState("");
  const onClickSetCurrentChoice = (choice: string) => {
    setCurrentChoice(choice);
    setVisible(!isVisible);
  };

  const onClickResetFilter = () => {
    setCurrentChoice("");
    setVisible(false);
  };
  const onClickFilterHandler = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      {label ? (
        <div className=" mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold">{label}</p>
          {reset ? (
            <p
              onClick={onClickResetFilter}
              className="cursor-pointer text-xs text-gray-500"
            >
              Reset
            </p>
          ) : null}
        </div>
      ) : null}

      <div
        className={`${
          isVisible ? "rounded-t-lg" : "rounded-lg"
        } relative   border border-solid border-gray-500 bg-white transition-all duration-100`}
      >
        <div
          className=" flex cursor-pointer items-center justify-between rounded-lg px-3 py-[10px] transition-all hover:bg-gray-100 hover:transition-all"
          onClick={onClickFilterHandler}
        >
          <p>{currentChoice === "" ? placeholder : currentChoice}</p>{" "}
          <DropDownIcon />
        </div>
        <div
          className={`${
            isVisible ? " max-h-[200px] pb-[10px]" : "  max-h-0  opacity-0 "
          } absolute z-10 w-full cursor-pointer overflow-y-scroll rounded-b-lg
  border-x border-b  border-gray-500  bg-white transition-all`}
        >
          {options?.map((option) => (
            <p
              className="rounded-lg px-3 py-[10px] transition-all hover:bg-gray-100 hover:transition-all"
              onClick={() => onClickSetCurrentChoice(option)}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;
