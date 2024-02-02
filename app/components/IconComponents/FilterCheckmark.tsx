import * as React from "react";
import type { SVGProps } from "react";
const FilterCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 5L5 8.5L10.5 1"
      stroke="#3C7D46"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default FilterCheckmark;
