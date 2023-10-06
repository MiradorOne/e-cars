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
      <a href="tel:555-666-7777">555-666-7777</a>
    </div>
  );
};

export default Phone;
