import React from "react";
import { Button } from "~/components/Button";
import GoogleIconSvg from "../IconComponents/GoogleIconSvg";

const GoogleAuth = () => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <hr className="h-px w-full max-w-[185px] bg-gray-500" />
        <p className="mx-2 text-gray-500">or</p>
        <hr className="h-px w-full max-w-[185px] bg-gray-500" />
      </div>
      <Button
        className="rounded-lg"
        intent="secondary"
        width="full"
        size="medium"
      >
        <GoogleIconSvg className="mr-2" />
        Authorize with Google
      </Button>
    </div>
  );
};

export default GoogleAuth;
