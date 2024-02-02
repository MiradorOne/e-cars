import React, { useCallback, useContext, useEffect, useState } from "react";
import DropDownIcon from "~/components/IconComponents/DropDownIcon";
import { CatalogContext } from "~/pages/CatalogPage";
import type { minMax } from "~/components/CatalogPage/Filter/MinMaxFilter";
interface Props {
  placeholder?: string;
  options?: string[];
  label?: string;
  reset?: boolean;
  activeSelect?: string;
  setActiveSelect?: () => void;
  handleMin?: (data: number) => void;
  minMax?: minMax;
  handleMax?: (data: number) => void;
  resetAllSelect?: boolean;
  resetHandler?: (e: boolean) => void;
}

const FilterSelect = ({
  placeholder,
  options,
  reset,
  label,
  activeSelect,
  setActiveSelect,
  handleMin,
  handleMax,
  minMax,
  resetAllSelect,
  resetHandler,
}: Props) => {
  const [isVisible, setVisible] = useState(false);
  const [currentChoice, setCurrentChoice] = useState("");
  const context = useContext(CatalogContext);
  const onClickSetCurrentChoice = (choice: string) => {
    if (handleMin && placeholder === "Min" && minMax!.max > Number(choice)) {
      handleMin(Number(choice));
      setCurrentChoice(choice);
      context.setCriteria([...context.criteria, choice]);
    }
    if (handleMax && placeholder === "Max" && minMax!.min < Number(choice)) {
      handleMax(Number(choice));
      setCurrentChoice(choice);
      context.setCriteria([...context.criteria, choice]);
    }

    if (!context.criteria.includes(choice) && !minMax) {
      setCurrentChoice(choice);
      context.setCriteria([...context.criteria, choice]);
    }
    if (!minMax) {
      setCurrentChoice(choice);
    }
    setVisible(!isVisible);
  };

  const onClickResetFilter = useCallback(() => {
    if (resetHandler) {
      resetHandler(true);
    }
    context.setCriteria(
      context.criteria.filter((box) => box !== currentChoice)
    );

    setCurrentChoice("");
    setVisible(false);
  }, [context, currentChoice]);
  const onClickFilterHandler = () => {
    if (setActiveSelect) {
      setActiveSelect();
    }
    setVisible(!isVisible);
  };
  useEffect(() => {
    if (activeSelect !== label) {
      setVisible(false);
    }
  }, [activeSelect]);
  useEffect(() => {
    if (
      (context.criteria.length === 0 && currentChoice !== "") ||
      resetAllSelect
    ) {
      onClickResetFilter();
      if (resetHandler) {
        resetHandler(false);
      }
    }
  }, [
    context.criteria.length,
    currentChoice,
    onClickResetFilter,
    resetAllSelect,
  ]);

  return (
    <>
      {label && (
        <div className=" mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold">{label}</p>
          {reset && (
            <p
              onClick={onClickResetFilter}
              className="cursor-pointer text-xs text-gray-500"
            >
              Reset
            </p>
          )}
        </div>
      )}
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
          } absolute z-10 w-full cursor-pointer overflow-y-scroll rounded-b-lg bg-white
            outline outline-1  outline-gray-500  transition-all`}
        >
          {options?.map((option, index) => (
            <p
              key={index}
              className="rounded-lg px-3 py-[10px] transition-all hover:bg-gray-100 hover:transition-all"
              onClick={() => onClickSetCurrentChoice(option)}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSelect;
