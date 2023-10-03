import React from "react";

interface Props {
  className?: string;
  isBurger?: boolean;
}

const Currency = ({ className, isBurger }: Props) => {
  return (
    <div className={`mr-6 flex items-center ${className}`}>
      <label htmlFor="ship-select">Currency</label>
      <select
        name="currency"
        id="ship-select"
        className={
          isBurger ? "bg-white text-gray-900" : "bg-stone-900 text-white"
        }
      >
        <option value="usd " selected className="bg-inherit">
          USD
        </option>
        <option value="Ukraine" className="bg-inherit">
          EUR
        </option>
      </select>
    </div>
  );
};

export default Currency;
