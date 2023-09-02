import * as React from "react";
import type { SVGProps } from "react";
const SvgGeoHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 15"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.7}
      d="M10.243 10.576 6 14.819l-4.243-4.243a6 6 0 1 1 8.486 0ZM6 7.666A1.333 1.333 0 1 0 6 5a1.333 1.333 0 0 0 0 2.667Z"
    />
  </svg>
);
export default SvgGeoHeader;
