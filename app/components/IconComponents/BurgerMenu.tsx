import * as React from "react";
import type { SVGProps } from "react";
const BurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 3.3335H17.5V5.00016H2.5V3.3335ZM2.5 9.16683H17.5V10.8335H2.5V9.16683ZM2.5 15.0002H17.5V16.6668H2.5V15.0002Z"
      fill="#1A1A1A"
    />
  </svg>
);
export default BurgerMenu;
