import * as React from "react";
import type { SVGProps } from "react";
const SvgLargeSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#fff"
      d="M20 .875A19.125 19.125 0 1 0 39.125 20 19.162 19.162 0 0 0 20 .875Zm0 36A16.874 16.874 0 1 1 36.875 20 16.894 16.894 0 0 1 20 36.875Zm1.875-7.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm4.5-13.5a6.394 6.394 0 0 1-5.25 6.281V23a1.125 1.125 0 1 1-2.25 0v-1.5A1.125 1.125 0 0 1 20 20.375a4.124 4.124 0 1 0-4.125-4.125 1.125 1.125 0 1 1-2.25 0 6.375 6.375 0 0 1 12.75 0Z"
    />
  </svg>
);
export default SvgLargeSupport;
