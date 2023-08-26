import React from "react";

const TopBar = () => {
  return (
    <section className="bg-gray-mainDark py-2">
      <div className="container mx-auto grid grid-cols-2 text-white text-opacity-30">
        <div>Contacts</div>
        <div className="place-self-end">Currency</div>
      </div>
    </section>
  );
};

export default TopBar;
