import React from "react";
import { Button } from "~/components/Button";
import Description from "~/components/Description/Description";

const HomePage = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-wrap content-center justify-center border-2 border-gray-300">
      {/*<Button intent={"primary"} size={"small"}>*/}
      {/*  Get a quote*/}
      {/*</Button>*/}
      <Description intent={"howItWorks"} />
    </div>
  );
};

export default HomePage;
