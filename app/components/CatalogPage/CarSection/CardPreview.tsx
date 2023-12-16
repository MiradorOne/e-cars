import React from "react";
import img from "../../../Assets/CarPreviewImg.png";
import SvgLikeHeader from "~/components/IconComponents/LikeHeader";
import RightArrow from "~/components/IconComponents/RightArrow";

interface Props {
  isPremium?: boolean;
}
const CardPreview = ({ isPremium }: Props) => {
  return (
    <div className="relative mb-4 flex rounded-lg shadow-3xl min-[320px]:flex-col md:h-[225px] md:flex-row">
      <img
        src={img}
        alt="#"
        className=" cursor-pointer min-[320px]:rounded-t-lg md:h-[225px] md:w-[300px] md:rounded-l-lg"
      />
      {isPremium ? (
        <div className="absolute  top-[9px] rounded-r-lg bg-yellow-500 px-2 py-1 text-xs font-semibold">
          Premium
        </div>
      ) : null}

      <div className="p-4">
        <div className="flex h-full flex-col justify-between ">
          <div>
            <div className="flex justify-between">
              <p>Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT</p>
              <SvgLikeHeader fill="#A3A3A3" className="cursor-pointer" />
            </div>
            <ul className="mt-2 flex flex-wrap text-sm text-gray-700 [&>*:not(:first-child)]:ml-2 [&>*:not(:first-child)]:before:mr-2 [&>*:not(:first-child)]:before:text-gray-300 [&>*:not(:first-child)]:before:content-['\2022']">
              <li>Milwaukee </li>
              <li>NEW</li>
              <li>0 km</li>
              <li>Gasoline</li>
            </ul>
            <p className="mt-2 text-sm">
              2022 Land Cruiser, panoramic roof, black interior, LED headlights
              and automatic gearbox. A brand new car with GCC specifications.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">$45,995</p>
            <div className="flex items-center">
              <button className="font-semibold text-green-800 ">Details</button>
              <RightArrow fill="#3C7D46" className="ml-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
