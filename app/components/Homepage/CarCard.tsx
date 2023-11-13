import React from "react";
import CarImg from "../../Assets/CarImg.png";
import RightCheckMark from "~/components/IconComponents/RightCheckMark";
import SvgLikeHeader from "~/components/IconComponents/LikeHeader";

interface CarCardProps {
  name?: string;
  status?: string;
  className?: string;
}

const CarCard = ({ className }: CarCardProps) => {
  return (
    <div
      className={` relative flex flex-col rounded-lg pb-4 shadow-21l min-[320px]:h-[312px] md:h-[332px] lg:h-[312px] ${className}`}
    >
      <div className="absolute right-2 top-2 cursor-pointer rounded-full bg-black/20 p-2">
        <SvgLikeHeader fill="#FFFFFF " />
      </div>
      <img
        className="w-full rounded-t-lg min-[320px]:h-[190px] md:h-[200px] lg:h-[180px]"
        src={CarImg}
        alt="#"
      />
      <div className="mt-4  px-4">
        <p className="text-base ">2019 BMW 640 Gran Turismo i xDrive</p>
        <ul className="mt-1 flex text-xs text-gray-500">
          <li className="mr-1">Used </li>
          <li className="mr-1"> • 27,057 mi </li>
          <li className="mr-1"> • Petrol</li>
        </ul>
      </div>
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex">
          <h3 className="mr-1.5 text-base font-semibold">$45,995</h3>
          <h3 className="">
            <del className="text-gray-500">$51,490</del>{" "}
          </h3>
        </div>
        <div className="flex items-center ">
          <p className=" cursor-pointer text-sm font-semibold text-green-800">
            Details
          </p>
          <RightCheckMark fill="#3C7D46" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
