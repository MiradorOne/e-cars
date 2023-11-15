import React from "react";
import CardPreview from "~/components/CatalogPage/CarSection/CardPreview";

const CarSection = () => {
  return (
    <>
      <section className="min-[320px]:w-full lg:w-[calc(100%-288px)]">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            <span className="font-semibold">2743</span> found
          </div>
          <div className="flex text-sm">
            <label htmlFor="sort" className="text-gray-700">
              Sort By:
              <select name="sort" id="sort" className="ml-2 text-gray-900">
                <option value="first" selected>
                  Newly added
                </option>
                <option value="fromLowPrice">Price &#8593;</option>
                <option value="fromHighPrice">Price &#8595;</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <CardPreview isPremium={true} />
          <CardPreview isPremium={true} />
          <CardPreview isPremium={true} />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
        </div>
      </section>
    </>
  );
};

export default CarSection;
