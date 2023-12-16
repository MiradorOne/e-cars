import React, { useState } from "react";
import Checkbox from "~/components/CatalogPage/Filter/Checkbox";
import DropDownIcon from "~/components/IconComponents/DropDownIcon";

interface Props {
  options: string[];
  label: string;
}

const FilterCheckbox = ({ label, options }: Props) => {
  const [isExpanded, setExpanded] = useState(true);
  const onClickExpandHandler = () => {
    setExpanded(!isExpanded);
    console.log(isExpanded);
  };
  return (
    <div>
      <div className=" mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">{label}</p>
        <div className=" flex items-center">
          <p className="cursor-pointer text-xs text-gray-500">Reset</p>
          <DropDownIcon
            onClick={onClickExpandHandler}
            className={`ml-3 cursor-pointer transition-transform ${
              isExpanded ? "rotate-180" : null
            }`}
          />
        </div>
      </div>
      <div
        className={`  tr overflow-y-auto transition-max-height ${
          isExpanded ? "max-h-[192px]" : "max-h-0"
        }`}
      >
        {options.map((option) => (
          <Checkbox option={option} />
        ))}
      </div>
    </div>
  );
};

export default FilterCheckbox;
