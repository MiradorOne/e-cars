import React, { useContext, useEffect, useState } from "react";
import Checkbox from "~/components/CatalogPage/Filter/Checkbox";
import DropDownIcon from "~/components/IconComponents/DropDownIcon";
import { CatalogContext } from "~/pages/CatalogPage";

interface Props {
  options: string[];
  label: string;
}

const FilterCheckbox = ({ label, options }: Props) => {
  const [isExpanded, setExpanded] = useState(true);
  const [selectedBoxes, setSelectedBoxes] = useState<string[]>([]);
  const context = useContext(CatalogContext);

  const onClickResetHandler = () => {
    context.setCriteria(
      context.criteria.filter((el) => !selectedBoxes.includes(el as string))
    );
    setSelectedBoxes([]);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedBoxes.includes(e.target.name)) {
      setSelectedBoxes(selectedBoxes.filter((box) => box !== e.target.name));
      context.setCriteria(
        context.criteria.filter((box) => box !== e.target.name)
      );
    } else {
      setSelectedBoxes([...selectedBoxes, e.target.name]);
      context.setCriteria([...context.criteria, e.target.name]);
    }
  };

  const onClickExpandHandler = () => {
    setExpanded(!isExpanded);
  };
  useEffect(() => {
    if (context.criteria.length === 0) {
      setSelectedBoxes([]);
    }
  }, [context.criteria.length, setSelectedBoxes]);
  return (
    <>
      <div className=" mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">{label}</p>
        <div className=" flex items-center">
          <button
            onClick={onClickResetHandler}
            className="cursor-pointer text-xs text-gray-500"
          >
            Reset
          </button>
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
        {options.map((option, index) => (
          <Checkbox
            key={index}
            option={option}
            onChange={handleCheckbox}
            checked={selectedBoxes.includes(option)}
          />
        ))}
      </div>
    </>
  );
};

export default FilterCheckbox;
