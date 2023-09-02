import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchHeader = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.974 12.848 3.57 3.568-1.18 1.179-3.568-3.57a7.466 7.466 0 0 1-4.681 1.642c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.467 7.467 0 0 1-1.64 4.68Zm-1.671-.619a5.814 5.814 0 0 0 1.645-4.062 5.832 5.832 0 0 0-5.833-5.834 5.831 5.831 0 0 0-5.833 5.834A5.832 5.832 0 0 0 8.115 14a5.814 5.814 0 0 0 4.063-1.646l.124-.125Z"
    />
  </svg>
);
export default SvgSearchHeader;
