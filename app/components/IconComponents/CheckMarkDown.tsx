import * as React from "react";
import type { SVGProps } from "react";
const CheckMarkDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 10.9767L14.125 6.85168L15.3033 8.03002L10 13.3334L4.69667 8.03002L5.875 6.85168L10 10.9767Z"
      fill={props.fill}
    />
  </svg>
);
export default CheckMarkDown;
