import React from "react";

const Footer = () => (
  <footer className="bg-gray-100">
    <section className="container mx-auto mb-14 grid max-w-screen-xl grid-cols-4">
      <div>eCars</div>
      <div>Company</div>
      <div>Cars</div>
      <div>Contacts</div>
    </section>
    <section className="container mx-auto grid max-w-screen-xl grid-cols-2">
      <span>eCars © 2023. All rights reserved.</span>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-end">
        <span className="pr-6">Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
    </section>
  </footer>
);

export default Footer;
