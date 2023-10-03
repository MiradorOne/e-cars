import React from "react";
import SvgEmailHeader from "~/components/IconComponents/EmailHeader";

interface Props {
  className?: string;
  fill?: string;
  fillOpacity?: string;
}
const Email = ({ className, fill, fillOpacity }: Props) => {
  return (
    <div className={` flex items-center ${className}`}>
      <SvgEmailHeader
        className="mr-1.5"
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <p>request@example.com</p>
    </div>
  );
};

export default Email;
