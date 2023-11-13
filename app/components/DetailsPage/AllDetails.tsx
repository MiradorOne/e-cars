import React, { useState } from "react";
import Parameter from "~/components/DetailsPage/Parameter";
import Heading from "~/components/Heading";
import ArrowDownSvg from "~/components/IconComponents/ArrowDownSvg";
import { FeaturesCheckMark } from "~/components/IconComponents";
import { Button } from "~/components/Button";

interface AllDetailsProps {
  className?: string;
}
const AllDetails = ({ className }: AllDetailsProps) => {
  const [isTextFull, setTextFull] = useState(false);
  return (
    <div className={`${className} min-[320px]:mt-6 md:mt-8`}>
      <div className="flex flex-col flex-wrap gap-x-6 border-solid border-gray-500 md:max-h-[320px] [&>*]:border-b">
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
        <Parameter />
      </div>
      <div>
        <Heading intent="maxsize22" className="min-[320px]:mt-6 md:mt-8">
          Description
        </Heading>
        <p
          className={`${
            isTextFull ? "h-full" : "h-[160px]"
          } mt-6  overflow-y-hidden text-sm`}
        >
          Toyota Land Cruiser 2017 ZX-G Frontier Face-Lifted Petrol 4.6L Sunroof
          4WD AT 7 Electric Leather Seats [RHD Japan Import] Premium Condition.
          <br />
          <br />
          Quis blandit turpis cursus in hac. In hendrerit gravida rutrum
          quisque. Pellentesque habitant morbi tristique senectus et. Eget
          gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Porttitor massa id neque aliquam. In fermentum
          posuere urna nec. Rhoncus aenean vel elit scelerisque mauris
          pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse
          sed nisi. Consequat id porta nibh venenatis cras sed. Quis blandit
          turpis cursus in hac. In hendrerit gravida rutrum quisque.
          Pellentesque habitant morbi tristique senectus et. Eget gravida cum
          sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing
          bibendum. Porttitor massa id neque aliquam. In fermentum posuere urna
          nec. Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam
          ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat
          id porta nibh venenatis cras sed.
        </p>
        <button
          onClick={() => setTextFull(!isTextFull)}
          className="flex items-center text-green-800"
        >
          {isTextFull ? "Less" : "More"}
          <ArrowDownSvg
            fill="#3C7D46"
            className={`${isTextFull ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        <Heading intent="maxsize22" className="mt-6 md:mt-8">
          Features
        </Heading>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 ">
          <div className="min-[320px]:mb-3 md:mb-0">
            <h3 className="mb-3 text-base font-semibold">Interior</h3>
            {Array.from({ length: 15 }, (_) => (
              <div className="flex items-center py-1 text-sm">
                <FeaturesCheckMark fill="#767676" className="mr-2" />
                Air conditioning
              </div>
            ))}
          </div>
          <div>
            <div className="mb-3 lg:mb-6">
              <h3 className="mb-3 text-base font-semibold">Exterior</h3>
              {Array.from({ length: 4 }, (_) => (
                <div className="flex items-center py-1 text-sm">
                  <FeaturesCheckMark fill="#767676" className="mr-2" />
                  Air conditioning
                </div>
              ))}
            </div>
            <h3 className="mb-3 text-base font-semibold">
              Security & Environment
            </h3>
            <div>
              {Array.from({ length: 9 }, (_) => (
                <div className="flex items-center py-1 text-sm">
                  <FeaturesCheckMark fill="#767676" className="mr-2" />
                  Air conditioning
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full  flex-col rounded-lg p-4 shadow-3xl md:mt-8 md:flex-row md:items-center">
        <div className="md:mr-6">
          <Heading intent="maxsize22" className="mb-3">
            Do you still have questions? Contact us for answers.
          </Heading>
          <p className="text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <Button
          intent="primary"
          size="medium"
          className="mt-4 w-[135px] whitespace-nowrap px-6"
        >
          Contact Us
        </Button>
      </div>
      <Heading intent="maxsize22" className="mb-6 mt-6 md:mt-8">
        Quick links
      </Heading>
      <div className="flex flex-col flex-wrap gap-y-2 md:h-[48px]">
        <p className="cursor-pointer text-sm text-green-800">
          Toyota Land Cruiser for sale in Dubai
        </p>
        <p className="cursor-pointer text-sm text-green-800">
          Toyota Land Cruiser for sale in Dubai
        </p>
        <p className="cursor-pointer text-sm text-green-800">
          Toyota Land Cruiser for sale in Dubai
        </p>
        <p className="cursor-pointer text-sm text-green-800">
          Toyota Land Cruiser for sale in Dubai
        </p>
      </div>
    </div>
  );
};

export default AllDetails;
// display: -webkit-box;
// -webkit-line-clamp: 6;
// -webkit-box-orient: vertical;
// overflow: hidden;
