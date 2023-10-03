import React from "react";
import SvgWhatsAppHeader from "~/components/IconComponents/WhatsAppHeader";

interface Props {
  className?: string;
  fill?: string;
  fillOpacity?: string;
}
const Phone = ({ className, fill, fillOpacity }: Props) => {
  return (
    <div className={` flex items-center ${className}`}>
      <SvgWhatsAppHeader
        className="mr-1.5"
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <p>+971 55 811 9024</p>
    </div>
  );
};

export default Phone;
