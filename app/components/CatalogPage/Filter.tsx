import React, { useContext, useState } from "react";
import FilterSelect from "~/components/CatalogPage/Filter/FilterSelect";
import FilterCheckbox from "~/components/CatalogPage/Filter/FilterCheckbox";
import { ClientOnly } from "~/components/client-only";
import RangeFilter from "~/components/CatalogPage/Filter/RangeFilter";
import MinMaxFilter from "~/components/CatalogPage/Filter/MinMaxFilter";
import RightArrow from "~/components/IconComponents/RightArrow";
import { Cross } from "~/components/IconComponents";
import BrandSelect from "~/components/CatalogPage/Filter/BrandSelect";
import { CatalogContext } from "~/pages/CatalogPage";

interface Props {
  classname?: string;
  setMobileFilterVisible?: () => void;
}

const Filter = ({ classname, setMobileFilterVisible }: Props) => {
  const [isAddFiltersVisible, setVisible] = useState(false);
  const context = useContext(CatalogContext);

  const onClickFiltersHandler = () => {
    setVisible(!isAddFiltersVisible);
  };

  return (
    <div
      className={`relative border border-solid border-[#E6E6E6] p-4 lg:mr-6 lg:rounded-lg [&>*:not(:first-child)]:mt-3 ${classname}`}
    >
      <div className="flex w-auto items-center justify-between bg-gray-200 p-4 lg:hidden">
        <p className="text-sm font-semibold">Filters</p>
        <Cross
          className="cursor-pointer"
          onClick={() =>
            setMobileFilterVisible ? setMobileFilterVisible() : null
          }
        />
      </div>
      <BrandSelect />
      <FilterCheckbox
        label="Vehicle type"
        options={[
          "SUV/Crossover",
          "Sedan",
          "Pick Up Truck",
          "Convertible",
          "Coupe",
          "Hatchback",
          "option1",
          "Hatchback1",
          "Hatchback2",
          "Hatchback3",
          "Hatchback4",
          "Hatchback5",
          "Hatchback6",
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
        reset
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
      <div className="flex w-full border-t border-solid border-gray-500 py-3 lg:hidden">
        <button
          disabled={context.criteria.length === 0}
          onClick={() => context.setCriteria([])}
          className={`${
            context.criteria.length > 0
              ? "bg-red-600 text-black"
              : "bg-gray-100 text-red-700"
          } mr-2 rounded-lg  px-3 py-1.5 `}
        >
          <p>Reset</p>
        </button>
        <button
          disabled={context.criteria.length === 0}
          className={`${
            context.criteria.length > 0
              ? "bg-green-800 text-green-100"
              : "bg-green-100 text-green-800"
          } w-full rounded-lg bg-green-100 `}
        >
          <p className="mx-auto w-fit py-1.5">Apply</p>
        </button>
      </div>
    </div>
  );
};

export default Filter;
