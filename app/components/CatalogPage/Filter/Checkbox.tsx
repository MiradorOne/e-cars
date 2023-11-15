import React, { useState } from "react";
import FilterCheckmark from "~/components/IconComponents/FilterCheckmark";

interface Props {
  option: string;
}

const Checkbox = ({ option }: Props) => {
  const [checkmarkVisible, setCheckmarkVisible] = useState(false);

  const checkboxHandler = () => {
    setCheckmarkVisible(!checkmarkVisible);
  };
  return (
    <label className="[0 group relative mb-1 block cursor-pointer select-none pl-[35px] pt-2 text-[22px] text-sm content-[''] after:absolute after:left-[7px] after:top-px after:h-2.5 after:w-[5px] after:rotate-45 after:border-l-[3px] after:border-r-[3px] after:border-[solid] after:opacity-0">
      {option}
      <input
        onClick={checkboxHandler}
        type="checkbox"
        className="absolute h-0 w-0 cursor-pointer opacity-0"
      />
      <span className="after:hidde absolute left-0 top-[8px] flex h-[20px] w-[20px] items-center justify-center rounded border border-solid border-[#D1D1D1] bg-white after:absolute after:content-[''] group-hover:bg-gray-100">
        <FilterCheckmark className={checkmarkVisible ? "block" : "hidden"} />
      </span>
    </label>
  );
};

export default Checkbox;
