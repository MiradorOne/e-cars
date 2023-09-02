import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.7}
      d="M7 13.667A6.667 6.667 0 1 1 7 .334a6.667 6.667 0 0 1 0 13.333ZM6.333 9v1.333h1.334V9H6.333Zm1.334-1.097A2.335 2.335 0 0 0 7 3.333 2.334 2.334 0 0 0 4.71 5.21l1.308.262A1 1 0 1 1 7 6.667a.667.667 0 0 0-.666.666v1h1.334v-.43Z"
    />
  </svg>
);
export default SvgHelpHeader;
