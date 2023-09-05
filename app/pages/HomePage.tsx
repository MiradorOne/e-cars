import React from "react";
import CreateNewPost from "~/pages/CreateNewPost";
const HomePage = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-wrap content-center justify-center border-2 border-gray-300">
      <CreateNewPost />
    </div>
  );
};

export default HomePage;
