import * as React from "react";
import type { SVGProps } from "react";
const DownloadSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.8332 8.33333H14.9998L9.99984 13.3333L4.99984 8.33333H9.1665V2.5H10.8332V8.33333ZM3.33317 15.8333H16.6665V10H18.3332V16.6667C18.3332 16.8877 18.2454 17.0996 18.0891 17.2559C17.9328 17.4122 17.7208 17.5 17.4998 17.5H2.49984C2.27882 17.5 2.06686 17.4122 1.91058 17.2559C1.7543 17.0996 1.6665 16.8877 1.6665 16.6667V10H3.33317V15.8333Z"
      fill="#3C7D46"
    />
  </svg>
);
export default DownloadSvg;
