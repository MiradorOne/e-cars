import * as React from "react";
import type { SVGProps } from "react";
const RightCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9767 10.0001L6.85168 5.87511L8.03002 4.69678L13.3334 10.0001L8.03002 15.3034L6.85168 14.1251L10.9767 10.0001Z"
      fill={props.fill}
    />
  </svg>
);
export default RightCheckMark;
