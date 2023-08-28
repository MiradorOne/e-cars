import * as React from "react";
import type { SVGProps } from "react";
const SvgEmailHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 12"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.7}
      d="M1 0h12a.666.666 0 0 1 .667.667v10.666A.666.666 0 0 1 13 12H1a.666.666 0 0 1-.667-.667V.667A.667.667 0 0 1 1 0Zm6.04 5.789-4.275-3.63-.863 1.016 5.147 4.37 5.054-4.374-.872-1.008-4.19 3.626H7.04Z"
    />
  </svg>
);
export default SvgEmailHeader;
