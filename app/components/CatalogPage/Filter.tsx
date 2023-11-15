import React, { useState } from "react";
import FilterSelect from "~/components/CatalogPage/Filter/FilterSelect";
import FilterCheckbox from "~/components/CatalogPage/Filter/FilterCheckbox";
import { ClientOnly } from "~/components/client-only";
import RangeFilter from "~/components/CatalogPage/Filter/RangeFilter";
import MinMaxFilter from "~/components/CatalogPage/Filter/MinMaxFilter";
import RightArrow from "~/components/IconComponents/RightArrow";
import { Cross } from "~/components/IconComponents";

interface Props {
  classname?: string;
}

const Filter = ({ classname }: Props) => {
  const [isAddFiltersVisible, setVisible] = useState(false);

  const onClickFiltersHandler = () => {
    setVisible(!isAddFiltersVisible);
  };
  return (
    <div
      className={` relative	rounded-lg border border-solid border-[#E6E6E6] p-4 lg:mr-6 [&>*:not(:first-child)]:mt-3	${classname}`}
    >
      <div className="   flex w-auto  items-center justify-between bg-gray-200 p-4 lg:hidden">
        <p className=" text-sm font-semibold">Filters</p>
        <Cross className="cursor-pointer" onClick={onClickFiltersHandler} />
      </div>
      <FilterSelect
        placeholder="Select brand"
        options={["BMW", "Fiat", "Nissan", "Hyundai", "BMW", "Fiat"]}
        label="Make"
        reset={true}
      />
      <FilterSelect
        placeholder="All"
        label="Model"
        options={["Prado", "Land Cruiser", "FJ", "Corolla", "Camry"]}
      />
      <FilterCheckbox
        label="Vehicle type"
        options={[
          "Vehicle",
          "Vehicle",
          "type",
          "Vehicle type",
          "Vehicle",
          "Vehicle",
          "type",
          "Vehicle type",
          "Vehicle type",
          "Vehicle",
          "Vehicle",
          "type",
          "Vehicle type",
        ]}
      />
      <ClientOnly
        fallback={<p>Loading...</p>}
        children={() => <RangeFilter min={0} max={20000} label="Kilometers" />}
      />
      <MinMaxFilter
        label="Year"
        options={[
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
        ]}
      />
      <ClientOnly
        fallback={<p>Loading...</p>}
        children={() => <RangeFilter min={0} max={300000} label="Price, USD" />}
      />
      <FilterSelect
        placeholder="Select country"
        options={["USA", "Ukraine", "Canada", "Mexico", "Germany", "France"]}
        label="Country"
        reset={true}
      />
      <FilterCheckbox
        label="City"
        options={[
          "New York",
          "Los Angeles",
          "Houston",
          "Chicago",
          "Phoenix",
          "Philadelphia",
        ]}
      />
      <div
        className={`${
          isAddFiltersVisible ? "max-h-[1000px]" : "max-h-0"
        } overflow-hidden transition-max-height duration-700`}
      >
        <p className="font-semibold uppercase text-gray-500">Specifications</p>
        <FilterCheckbox
          label="Cylinders"
          options={["2", "3", "4", "5", "6", "8"]}
        />
        <FilterCheckbox
          label="Color"
          options={["Black", "Blue", "Brown", "Gold", "Green", "Gray"]}
        />
        <FilterCheckbox
          label="Seats"
          options={["2", "3", "4", "5", "6", "7+"]}
        />
        <FilterCheckbox
          label="Transmission"
          options={["Gasoline", "Diesel", "Hybrid", "Electric"]}
        />
        <FilterCheckbox label="Fuel type" options={["Manual", "Automatic"]} />
      </div>
      <div
        onClick={onClickFiltersHandler}
        className="flex cursor-pointer items-center font-semibold text-green-800"
      >
        <p>{isAddFiltersVisible ? "Less filters " : "More filters "}</p>
        <RightArrow
          fill="#3C7D46"
          className={`${
            isAddFiltersVisible ? "-rotate-90 " : "rotate-90"
          } ml-2 transition-all`}
        />
      </div>
      <div className=" flex w-full   border-t border-solid border-gray-500 py-3 lg:hidden">
        <button className="mr-2 rounded-lg bg-gray-100 px-3 py-1.5 text-gray-700">
          <p>Reset</p>
        </button>
        <button className="w-full rounded-lg bg-green-100 text-green-800">
          <p className="mx-auto w-fit py-1.5">Apply</p>
        </button>
      </div>
    </div>
  );
};

export default Filter;
