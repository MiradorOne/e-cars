import React, { useState } from "react";
import FilterSelect from "~/components/CatalogPage/Filter/FilterSelect";

interface Props {
  label: string;
  options?: string[];
}
export interface minMax {
  min: number;
  max: number;
}

const MinMaxFilter = ({ label, options }: Props) => {
  const [minMax, setMinMax] = useState<minMax>({ min: 2001, max: 2011 });

  const handleMin = (data: number) => {
    setMinMax({ ...minMax, min: data });
  };
  const handleMax = (data: number) => {
    setMinMax({ ...minMax, max: data });
  };

  return (
    <>
      <p>{label}</p>
      <div className=" grid grid-cols-2 gap-2">
        <FilterSelect
          options={options}
          placeholder="Min"
          handleMin={handleMin}
          minMax={minMax}
        />
        <FilterSelect
          options={options}
          placeholder="Max"
          handleMax={handleMax}
          minMax={minMax}
        />
      </div>
    </>
  );
};

export default MinMaxFilter;
