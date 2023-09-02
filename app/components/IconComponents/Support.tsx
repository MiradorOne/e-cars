import * as React from "react";
import type { SVGProps } from "react";
const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    viewBox="0 0 18 17"
    {...props}
  >
    <path
      fill="#1A1A1A"
      d="M15.667 4h-3.334V2.333A1.667 1.667 0 0 0 10.667.667H7.333a1.66 1.66 0 0 0-1.666 1.666V4H2.333A1.66 1.66 0 0 0 .667 5.667v9.166A1.667 1.667 0 0 0 2.333 16.5h13.334a1.667 1.667 0 0 0 1.666-1.667V5.667A1.667 1.667 0 0 0 15.667 4ZM7.333 2.333h3.334V4H7.333V2.333ZM9 6.5a2.083 2.083 0 1 1 0 4.167A2.083 2.083 0 0 1 9 6.5Zm4.167 8.333H4.833v-1.041c0-1.15 1.867-2.084 4.167-2.084s4.167.934 4.167 2.084v1.041Z"
    />
  </svg>
);
export default SvgSupport;
