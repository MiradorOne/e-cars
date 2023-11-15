import React, { createContext, useContext, useState } from "react";
import Heading from "~/components/Heading";
import Filter from "~/components/CatalogPage/Filter";
import CarSection from "~/components/CatalogPage/CarSection";
import FilterIcon from "~/components/IconComponents/FilterIcon";

export type ContextContent = {
  criteria: [];
  setCriteria: any;
};

export const CatalogContext = createContext<ContextContent>({
  criteria: [],
  setCriteria: () => {},
});
export const useCatalogContext = () => useContext(CatalogContext);
const CatalogPage = () => {
  const [criteria, setCriteria] = useState<any>([]);
  const [isMobileFilterVisible, setMobileFilterVisible] = useState(false);
  const onClickFilterHandler = () => {
    setMobileFilterVisible(!isMobileFilterVisible);
  };
  // useEffect(() => {
  //   if (isMobileFilterVisible) {
  //     document.body.style.overflowY = "hidden";
  //   } else {
  //     document.body.style.overflowY = "visible";
  //   }
  // });

  return (
    <CatalogContext.Provider value={{ criteria, setCriteria }}>
      <div
        className={`absolute z-10 flex w-full ${
          isMobileFilterVisible ? "block " : "hidden"
        } `}
      >
        <div
          className="bg-black  opacity-60	min-[320px]:w-[calc(100%-335px)] md:w-[calc(100%-360px)]"
          onClick={onClickFilterHandler}
        ></div>
        <Filter
          classname={`md:w-[360px]  bg-white lg:hidden  max-h-[1024px] overflow-y-scroll min-[320px]:w-[335px]`}
        />
      </div>
      <div className="relative mx-auto w-full max-w-[1016px] px-8 min-[320px]:py-8 md:py-10 lg:px-0 lg:py-12">
        <Heading intent="maxsize32">Find cars to fit your criteria</Heading>
        <div className="mt-6 lg:flex">
          <div
            className="w-fit cursor-pointer items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-semibold min-[320px]:flex lg:hidden "
            onClick={onClickFilterHandler}
          >
            <FilterIcon className="mr-2" />
            <p>Filters</p>
          </div>
          <Filter classname="min-[320px]:hidden lg:block w-[288px] h-fit " />
          <CarSection />
        </div>
      </div>
    </CatalogContext.Provider>
  );
};

export default CatalogPage;