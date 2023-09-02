import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#1A1A1A"
      d="M8.948 17.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666Zm-4.156-3.12a6.638 6.638 0 0 0 4.156 1.454 6.642 6.642 0 0 0 4.306-1.577 5.817 5.817 0 0 0-4.172-1.757 5.817 5.817 0 0 0-4.29 1.88Zm-1.164-1.196a7.478 7.478 0 0 1 5.454-2.35 7.476 7.476 0 0 1 5.301 2.195 6.668 6.668 0 1 0-10.755.155Zm5.32-3.184a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm0-1.666a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z"
    />
  </svg>
);
export default SvgProfileHeader;
