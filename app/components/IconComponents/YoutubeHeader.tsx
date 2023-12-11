import * as React from "react";
import type { SVGProps } from "react";
const SvgYoutubeHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 12"
    {...props}
  >
    <path
      fill={props.fill}
      fillOpacity={props.fillOpacity}
      d="M13.362 2.332C13.667 3.52 13.667 6 13.667 6s0 2.48-.305 3.668a1.874 1.874 0 0 1-1.292 1.348c-1.14.317-5.07.317-5.07.317s-3.929 0-5.07-.317A1.874 1.874 0 0 1 .638 9.668C.333 8.48.333 6 .333 6s0-2.48.305-3.668A1.874 1.874 0 0 1 1.93.984C3.071.667 7 .667 7 .667s3.93 0 5.07.317c.63.177 1.125.693 1.292 1.348ZM5.667 8.333l4-2.333-4-2.333v4.666Z"
    />
  </svg>
);
export default SvgYoutubeHeader;
