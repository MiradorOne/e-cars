import React from "react";
import SvgGeoHeader from "~/components/IconComponents/GeoHeader";
import CanadaSvg from "~/components/IconComponents/CanadaSvg";

interface Props {
  className?: string;
  isBurger?: boolean;
}

const ShipTo = ({ className, isBurger }: Props) => {
  return (
    <div className={`mr-6 flex items-center ${className}`}>
      {isBurger ? null : <SvgGeoHeader className="mr-1.5" />}

      <label htmlFor="ship-select ">Ship to:</label>
      <CanadaSvg className="ml-1.5" />
      <select
        name="Country"
        id="ship-select"
        className={isBurger ? "bg-white text-black" : "bg-stone-900 text-white"}
      >
        <option value="Canada" selected>
          Canada
        </option>
        <option value="Ukraine">Ukraine</option>
      </select>
    </div>
  );
};

export default ShipTo;
