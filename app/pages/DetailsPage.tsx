import React from "react";
import car from "~/Assets/detailsMainImg.png";
import car2 from "~/Assets/car2.png";
import Slider from "~/components/DetailsPage/Slider";
import SvgCarsLikeStandart from "~/components/IconComponents/CarsLikeStandart";
import SvgShare from "~/components/IconComponents/SvgShare";
import Heading from "~/components/Heading";
import Parameter from "~/components/DetailsPage/Parameter";
import { Button } from "~/components/Button";
import SvgWhatsappBlack from "~/components/IconComponents/WhatsappBlack";
import EmailHeader from "~/components/IconComponents/EmailHeader";
import FeaturesCheckMark from "~/components/IconComponents/SvgFeaturesCheckMark";
import DownloadSvg from "~/components/IconComponents/DownloadSvg";
import AllDetails from "~/components/DetailsPage/AllDetails";
import CarCard from "~/components/Homepage/CarCard";
import LeftCheckMark from "~/components/IconComponents/LeftCheckMark";
import RightCheckMark from "~/components/IconComponents/RightCheckMark";

const DetailsPage = () => {
  const images = [
    car,
    car2,
    car,
    car2,
    car,
    car,
    car2,
    car,
    car2,
    car,
    car,
    car2,
    car,
    car2,
  ];

  return (
    <>
      <div className="mx-auto  mt-4 w-full max-w-[1224px] min-[320px]:px-4 md:px-8  min-[1256px]:px-0">
        <div className="gap-6 lg:grid lg:grid-cols-details">
          <div className="w-full md:mx-auto lg:mr-6">
            <Slider imageUrls={images} />
            <AllDetails className="min-[320px]:hidden lg:block" />
          </div>
          <div className=" min-[320px]:mt-6 min-[320px]:grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:mt-0 lg:block ">
            <div className=" border-solid border-gray-300  p-4 min-[320px]:border-t md:rounded-l-lg md:border-b md:border-l lg:rounded-b-none lg:rounded-t-lg lg:border">
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <SvgCarsLikeStandart className="mr-1" />
                  Save
                </div>
                <div className="flex items-center ">
                  <SvgShare className="mr-1" />
                  Share
                </div>
              </div>
              <Heading intent="maxsize22" className="mt-4">
                Toyota Land Cruiser 2017 ZX-G Frontier Face-Lifted Petrol 4.6L
                Sunroof 4WD
              </Heading>
              <h2 className="my-4 text-[26px] font-semibold text-green-800">
                $45,995
              </h2>
              <div>
                <Parameter />
                <Parameter />
                <Parameter />
                <Parameter />
              </div>
            </div>
            <div className=" border-solid border-gray-300 bg-gray-100 p-4 min-[320px]:border-y md:rounded-r-lg md:border-r lg:rounded-b-lg lg:rounded-t-none lg:border">
              <p className="text-base font-semibold">
                Interested in this car or want a personalized offer of the best
                deals?
              </p>
              <p className="mt-2">
                Contact us and our manager will give you all the information you
                need.
              </p>
              <Button
                intent="primary"
                size="medium"
                width="full"
                className="my-4 text-sm"
              >
                Check availability
              </Button>
              <Button
                intent="secondary"
                secondaryRadius="top"
                width="full"
                size="medium"
                className=" text-sm"
              >
                <SvgWhatsappBlack />
                +971 55 811 9024
              </Button>
              <Button
                intent="secondary"
                secondaryRadius="bot"
                width="full"
                size="medium"
                className="text-sm"
              >
                <EmailHeader fill="#1A1A1A" className="mr-1.5" />
                request@example.com
              </Button>
            </div>
            <div className="border-solid border-[#FFEDD3]	bg-[#FFF7EB] p-4 min-[320px]:border-b md:col-span-2 md:mt-8 md:rounded-lg md:border lg:col-auto lg:mt-6">
              <div className="mb-6 flex justify-between">
                <Heading intent="maxsize22">Vehicle inspection</Heading>
                <div className="flex items-center rounded-lg bg-[#E49A49] px-2 py-1.5">
                  <FeaturesCheckMark className="mr-1" fill={"#00000"} />
                  <p className="text-xs font-semibold ">Inspected</p>
                </div>
              </div>
              <div className="flex min-[320px]:flex-col md:flex-row lg:flex-col">
                <div className="md:w-[50%]  lg:w-auto">
                  <Parameter />
                  <Parameter />
                  <Parameter />
                  <Parameter />
                  <div className="mt-4 flex cursor-pointer font-semibold text-green-800">
                    <DownloadSvg className="mr-2" />
                    Download the basic report
                  </div>
                </div>
                <div className="md:w-[50%] lg:mt-6 lg:w-auto">
                  <h3 className="text-base font-semibold">Full Inspection</h3>
                  <p className="my-3 text-sm">
                    A complete inspection and history check. In addition, we
                    send you lots of photos and videos of the car to help you
                    make that important purchase.
                  </p>
                  <Button intent="primary" size="medium" width="full">
                    Book a full inspection
                  </Button>
                  <p className="mt-3 text-center text-green-700">
                    Learn more about the full inspection
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 hidden text-center text-xs lg:block">
              <span className="text-gray-500">Added: </span>
              <span className="text-gray-700">Jan 6, 2023</span>
              <span className="text-gray-500"> • Views:</span>
              <span className="text-gray-700"> 38</span>
            </p>
          </div>
          <AllDetails className="min-[320px]:block lg:hidden" />
        </div>
      </div>
      <hr className="min-[320px]:mt-8 md:mt-10 lg:mt-24" />
      <div className="mx-auto w-full max-w-[1224px] py-8 min-[320px]:px-4 md:px-8 md:py-10 lg:px-0 lg:py-24">
        <div className="flex items-center justify-between">
          <Heading intent="maxsize22">Similar cars</Heading>
          <div className="flex items-center">
            <LeftCheckMark fill="#767676" className="mr-4 cursor-pointer" />
            <RightCheckMark fill="#767676" className="cursor-pointer" />
          </div>
        </div>
        <div className=" mt-4   grid   w-full   gap-6  min-[320px]:grid-rows-1  md:grid-cols-2  lg:grid-cols-4 ">
          <CarCard />
          <CarCard className="min-[320px]:hidden md:block" />
          <CarCard className="min-[320px]:hidden lg:block" />
          <CarCard className="min-[320px]:hidden lg:block" />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
