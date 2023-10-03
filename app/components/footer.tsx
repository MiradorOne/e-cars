import React from "react";
import { Logo } from "~/components/IconComponents";
import Socials from "~/components/layout/Socials";
import Phone from "~/components/layout/Phone";
import Email from "~/components/layout/Email";

const Footer = () => (
  <footer className="w-full bg-[#F6F5F4] text-gray-700">
    <div className="mx-auto  w-full max-w-[1224px] min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0 lg:py-20">
      <div className="flex w-full justify-between min-[320px]:flex-col lg:flex-row  ">
        <div className="w-full  lg:max-w-[288px]">
          <Logo />
          <p className="mt-6 text-sm">
            Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae
            nunc. Ut tellus elementum sagittis vitae et leo duis.
          </p>
          <Socials
            intent="mr-[20px]"
            fill="#767676"
            fillOpacity="1"
            className="mt-6"
          />
        </div>
        <div className="grid  min-[320px]:mt-6 min-[320px]:grid-cols-1 md:mt-10	md:grid-cols-3 lg:mt-0 lg:gap-32">
          <div>
            <h3 className="font-semibold text-black min-[320px]:mb-4 lg:mb-6">
              Company
            </h3>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Blog</p>
            <p className="mb-3">FAQ</p>
          </div>
          <div>
            <h3 className="font-semibold text-black min-[320px]:mb-4 lg:mb-6">
              Cars
            </h3>
            <p className="mb-3">Special offers</p>
            <p className="mb-3">New cars</p>
            <p className="mb-3">New cars</p>
            <p className="mb-3">Brands</p>
          </div>
          <div>
            <h3 className="font-semibold text-black min-[320px]:mb-4 lg:mb-6">
              Contacts
            </h3>
            <Phone fill="#767676" fillOpacity="1" className="" />
            <Email
              fill="#767676"
              fillOpacity="1"
              className="min-[320px]:mt-3 md:mt-6"
            />
          </div>
        </div>
      </div>
      <div className="block justify-between text-xs text-gray-500 min-[320px]:mt-6 md:mt-10 md:flex lg:mt-[60px]">
        <p>eCars © 2022. All rights reserved.</p>
        <div className="flex min-[320px]:mt-4 md:mt-0">
          <p className="mr-6">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
