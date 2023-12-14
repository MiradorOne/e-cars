import React, { useContext, useEffect } from "react";
import { Link } from "@remix-run/react";
import { MenuContext } from "~/components/topbar";
import { Cross, Logo } from "~/components/IconComponents";
import Navigation from "~/components/layout/Navigation";
import ShipTo from "~/components/layout/ShipTo";
import Currency from "~/components/layout/Currency";
import Phone from "~/components/layout/Phone";
import Email from "~/components/layout/Email";
import Socials from "~/components/layout/Socials";
import LogoutIcon from "~/components/IconComponents/LogoutIcon";
import SvgProfileHeader from "~/components/IconComponents/ProfileHeader";
import { AuthUserContext } from "~/root";

const HamburgerMenu = () => {
  const context = useContext(MenuContext);
  const toggleHamburger = () => {
    context?.setHamburgerOpen(!context?.hamburgerOpen);
  };
  useEffect(() => {
    if (context?.hamburgerOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  });
  const userData = useContext(AuthUserContext);
  return (
    <div
      className={`absolute flex flex-col justify-between bg-white  transition-all min-[320px]:left-[-105%] min-[320px]:h-screen min-[320px]:w-screen min-[320px]:px-4 min-[320px]:pb-6 min-[320px]:pt-[44px] md:left-[-360px] md:w-full md:max-w-[360px] md:px-8 md:pb-8 md:pt-[50px] ${
        context?.hamburgerOpen
          ? "visible transition-all min-[320px]:translate-x-[105%] md:translate-x-[360px] "
          : "invisible "
      }`}
    >
      <div>
        <div className="flex items-center">
          <Cross onClick={toggleHamburger} />
          <Link to={"/"}>
            <Logo className="ml-4" />
          </Link>
        </div>
        <Navigation ulStyle="mt-[45px] text-gray-900" liStyle="mt-[36px]" />
      </div>
      <div className="text-gray-700">
        {userData ? (
          <div className="flex cursor-pointer items-center">
            <p className="mr-2">{userData.fullName}</p>
            <LogoutIcon className="mr-1.5" />
          </div>
        ) : (
          <Link to={"/login"}>
            <SvgProfileHeader className="mr-1.5" />
          </Link>
        )}
        <ShipTo isBurger={true} className="mt-6" />
        <Currency className="mt-6" isBurger={true} />
        <hr className="mt-6" />
        <Phone fill="#767676" fillOpacity="1" className="mt-6" />
        <Email fill="#767676" fillOpacity="1" className="mt-6" />
        <Socials
          intent="mr-[20px]"
          fill="#767676"
          fillOpacity="1"
          className="mt-6"
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
