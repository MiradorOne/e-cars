import * as React from "react";
import type { SVGProps } from "react";
const SvgInspectedCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 10"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M11.63.224a1 1 0 0 1 .146 1.407l-6.5 8a1 1 0 0 1-1.529.027l-3.5-4a1 1 0 0 1 1.506-1.317L4.472 7.45l5.752-7.08A1 1 0 0 1 11.63.224Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInspectedCheckmark;
