import React from "react";
import CarImg from "../../Assets/CarImg.png";
import RightCheckMark from "~/components/IconComponents/RightCheckMark";

interface CarCardProps {
  name?: string;
  status?: string;
  className?: string;
}

const CarCard = ({ className }: CarCardProps) => {
  return (
    <div
      className={` flex flex-col rounded-lg shadow-21l min-[320px]:h-[312px] md:h-[332px] lg:h-[312px] ${className}`}
    >
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
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex">
          <h3 className="mr-1.5 text-base font-semibold">$45,995</h3>
          <h3 className="">
            <del className="text-gray-500">$51,490</del>{" "}
          </h3>
        </div>
        <div className="flex items-center ">
          <p className=" text-sm font-semibold text-green-800">Details</p>
          <RightCheckMark fill="#3C7D46" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
