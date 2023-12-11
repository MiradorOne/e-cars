import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebookHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 14"
    {...props}
  >
    <path
      fill={props.fill}
      fillOpacity={props.fillOpacity}
      d="M5.333 8H7l.667-2.667H5.333V4c0-.687 0-1.333 1.334-1.333h1V.427A18.778 18.778 0 0 0 5.762.333c-1.81 0-3.095 1.105-3.095 3.134v1.866h-2V8h2v5.667h2.666V8Z"
    />
  </svg>
);
export default SvgFacebookHeader;
