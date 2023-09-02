import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 16"
    {...props}
  >
    <path
      fill="#1A1A1A"
      d="M8.95 1.774a4.998 4.998 0 0 1 7.064 7.054l-7.067 7.076-7.065-7.076A5 5 0 0 1 8.95 1.774Zm5.687 1.368a3.332 3.332 0 0 0-4.575-.128l-1.112.999-1.113-.998a3.332 3.332 0 0 0-4.739 4.67l5.85 5.86 5.85-5.858a3.333 3.333 0 0 0-.16-4.545Z"
    />
  </svg>
);
export default SvgLikeHeader;
