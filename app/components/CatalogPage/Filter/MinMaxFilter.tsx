import React from "react";
import FilterSelect from "~/components/CatalogPage/Filter/FilterSelect";

interface Props {
  label: string;
  options?: string[];
}

const MinMaxFilter = ({ label, options }: Props) => {
  return (
    <div>
      <p>{label}</p>
      <div className=" grid grid-cols-2 gap-2">
        <FilterSelect options={options} placeholder="Min" />
        <FilterSelect options={options} placeholder="Max" />
      </div>
    </div>
  );
};

export default MinMaxFilter;
