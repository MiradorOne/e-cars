import React, { useState } from "react";
import FilterSelect from "~/components/CatalogPage/Filter/FilterSelect";

const BrandSelect = () => {
  const [activeSelect, setActiveSelect] = useState("");
  const [resetAllSelect, setResetAllSelect] = useState(false);
  const resetHandler = (value: boolean) => {
    setResetAllSelect(value);
  };

  return (
    <>
      <FilterSelect
        placeholder="Select brand"
        options={["BMW", "Fiat", "Nissan", "Hyundai", "BMW", "Fiat"]}
        label="Make"
        reset
        setActiveSelect={() => setActiveSelect("Make")}
        activeSelect={activeSelect}
        resetAllSelect={resetAllSelect}
        resetHandler={resetHandler}
      />
      <FilterSelect
        placeholder="All"
        label="Model"
        options={["Prado", "Land Cruiser", "FJ", "Corolla", "Camry"]}
        setActiveSelect={() => setActiveSelect("Model")}
        activeSelect={activeSelect}
        resetAllSelect={resetAllSelect}
      />
    </>
  );
};

export default BrandSelect;
