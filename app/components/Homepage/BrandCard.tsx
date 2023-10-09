import React from "react";
import Ford from "./../../Assets/Ford.png";
const BrandCard = () => {
  return (
    <div className=" rounded-lg bg-white p-4">
      <div className="flex flex-col items-center">
        <img
          className="lg:h-80px lg:w-80px min-[320px]:h-[64px] min-[320px]:w-[64px]"
          src={Ford}
          alt="#"
        />
        <p>Volkswagen</p>
      </div>
    </div>
  );
};

export default BrandCard;
