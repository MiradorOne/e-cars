import * as React from "react";
import type { SVGProps } from "react";
const SvgProtection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    viewBox="0 0 16 18"
    {...props}
  >
    <path
      fill="#1A1A1A"
      d="m6.833.667 6.082 1.9a.834.834 0 0 1 .585.796v1.47h1.667a.833.833 0 0 1 .833.834v1.666H5.167V5.667A.833.833 0 0 1 6 4.833h5.833v-.858l-5-1.563-5 1.563v6.17a3.334 3.334 0 0 0 1.299 2.64l.157.114 3.544 2.418 3.152-2.15H6a.833.833 0 0 1-.833-.834V9H16v3.333a.833.833 0 0 1-.833.834h-2.684c-.322.425-.714.8-1.166 1.109l-4.484 3.057-4.483-3.056a5 5 0 0 1-2.183-4.132V3.363a.833.833 0 0 1 .585-.795L6.833.667Z"
    />
  </svg>
);
export default SvgProtection;
