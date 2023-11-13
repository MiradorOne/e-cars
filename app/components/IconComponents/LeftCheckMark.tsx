import * as React from "react";
import type { SVGProps } from "react";
const LeftCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.02329 9.99999L13.1483 14.125L11.97 15.3033L6.66663 9.99999L11.97 4.69666L13.1483 5.87499L9.02329 9.99999Z"
      fill={props.fill}
    />
  </svg>
);
export default LeftCheckMark;
