import * as React from "react";
import type { SVGProps } from "react";
const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.4767 9.16664L9.00671 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00671 15.3033L13.4767 10.8333H3.33337V9.16664H13.4767Z"
      fill={props.fill}
    />
  </svg>
);
export default RightArrow;
