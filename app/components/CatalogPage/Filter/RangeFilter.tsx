import React, { useState } from "react";
import ReactSlider from "react-slider";

interface Props {
  max: number;
  min: number;
  label: string;
}

const RangeFilter = ({ min, max, label }: Props) => {
  const [value, setValue] = useState([min, max]);
  const standardValue = [min, max];

  const onClickResetHandler = () => {
    setValue(standardValue);
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">{label}</p>
        <p
          onClick={onClickResetHandler}
          className="cursor-pointer text-xs text-gray-500"
        >
          Reset
        </p>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2">
        <div className="flex rounded-lg border border-solid border-gray-500 px-3 py-2.5">
          <p className="mr-1 text-gray-500">Min</p>
          <p className="text-gray-900">{value.length === 0 ? min : value[0]}</p>
        </div>
        <div className="flex rounded-lg border border-solid border-gray-500 px-3 py-2.5">
          <p className="mr-1 text-gray-500">Max</p>
          <p className="text-gray-900">{value.length === 0 ? max : value[1]}</p>
        </div>
      </div>
      <ReactSlider
        className="mb-8 rounded-r-sm [&>*:nth-child(1)]:rounded-l-sm [&>*:nth-child(1)]:bg-gray-300 [&>*:nth-child(3)]:bg-gray-300

"
        trackClassName="h-[3px] bg-green-800"
        max={max}
        min={min}
        value={value}
        defaultValue={value}
        onChange={(value, index) => setValue(value)}
        renderThumb={(props, state) => (
          <div
            {...props}
            className="relative  top-[-7px]	h-[18px] w-[18px]  rounded-2xl border-none bg-green-800 focus:border-gray-500"
          >
            <div className="absolute left-[3px] top-[3px] h-[12px] w-[12px] rounded-2xl bg-white"></div>
          </div>
        )}
      />
    </div>
  );
};

export default RangeFilter;
