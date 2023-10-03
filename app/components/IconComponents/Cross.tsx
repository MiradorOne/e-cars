import * as React from "react";
import type { SVGProps } from "react";
const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99998 8.82196L5.28593 4.10791L4.10742 5.28642L8.82147 10.0005L4.10743 14.7145L5.28594 15.893L9.99998 11.179L14.714 15.893L15.8925 14.7145L11.1785 10.0005L15.8925 5.28642L14.714 4.10791L9.99998 8.82196Z"
      fill="#1A1A1A"
    />
  </svg>
);
export default Cross;
