import React, { createContext, useState } from "react";
import { Link } from "@remix-run/react";
import Socials from "~/components/layout/Socials";
import SvgHelpHeader from "~/components/IconComponents/HelpHeader";
import Phone from "~/components/layout/Phone";
import Email from "~/components/layout/Email";
import ShipTo from "~/components/layout/ShipTo";
import Currency from "~/components/layout/Currency";
import Logo from "~/components/IconComponents/Logo";
import Navigation from "~/components/layout/Navigation";
import SvgSearchHeader from "~/components/IconComponents/SearchHeader";
import SvgLikeHeader from "~/components/IconComponents/LikeHeader";
import SvgProfileHeader from "~/components/IconComponents/ProfileHeader";
import { Button } from "~/components/Button";
import BurgerMenu from "~/components/IconComponents/BurgerMenu";
import HamburgerMenu from "~/components/layout/HamburgerMenu";

type MenuContextType = {
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MenuContext = createContext<MenuContextType | null>(null);

const TopBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <MenuContext.Provider value={{ hamburgerOpen, setHamburgerOpen }}>
        <HamburgerMenu />
        <section>
          <div className="flex h-[36px] items-center bg-stone-900 text-xs text-white/[0.7]">
            <div className="my mx-auto flex w-full max-w-[1224px] items-center justify-between min-[320px]:px-4 md:px-8 lg:px-4 min-[1256px]:px-0">
              <div className="flex items-center">
                <Socials
                  intent="mr-[16px]"
                  className="min-[320px]:hidden lg:flex"
                  fill="#FFFFFF"
                  fillOpacity="0.7"
                />
                <Phone fill="#FFFFFF" fillOpacity="0.7" className="mr-4" />
                <Email
                  className="min-[320px]:hidden lg:flex"
                  fill="#FFFFFF"
                  fillOpacity="0.7"
                />
              </div>
              <div className="flex">
                <ShipTo
                  className="min-[320px]:hidden md:flex"
                  isBurger={false}
                />
                <Currency
                  className="min-[320px]:hidden md:flex"
                  isBurger={false}
                />
                <div className="flex cursor-pointer items-center">
                  <SvgHelpHeader className="mr-1.5 " />
                  <p>Help</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex w-full items-center border-b border-solid border-b-[rgba(230,230,230,1)]  min-[320px]:h-[56px] md:h-[60px]">
            <div className="mx-auto flex w-full max-w-[1224px]  items-center justify-between min-[320px]:px-4 md:px-8 lg:px-4 min-[1256px]:px-0  ">
              <div className="flex items-center">
                <BurgerMenu
                  className="mr-4 min-[320px]:block lg:hidden"
                  onClick={toggleHamburger}
                />
                <Link to={"/"}>
                  <Logo />
                </Link>
                <Navigation
                  ulStyle="lg:flex text-[14px] font-semibold min-[320px]:hidden text-gray-900"
                  liStyle="ml-10"
                />
              </div>
              <div className="flex items-center">
                <SvgSearchHeader className="mr-4 cursor-pointer" />
                <SvgLikeHeader className="mr-4 cursor-pointer min-[320px]:hidden md:block" />
                <Link to={"/login"}>
                  <SvgProfileHeader className="mr-4 min-[320px]:hidden md:block" />
                </Link>
                <Button intent="primary" size="small" className="md:ml-4">
                  Get a quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </MenuContext.Provider>
    </>
  );
};

export default TopBar;
