import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNav from "./Mobile";
import Menus from "./Menu";

export interface NavbarProps {
  logo: JSX.Element;
  menus: {
    name: string;
    path: string;
    isActive?: boolean;
    isBtn?: boolean;
  }[];
  activeMenu?: string;
}

const Navbar = (props: NavbarProps) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <nav className="flex justify-between items-center  w-screen h-[77px] bg-primary text-wizard-white overflow-hidden sm:px-20">
      <div className={"logo  flex items-end justify-items-start "}>
        <div className="title text-3xl ">{props.logo}</div>
      </div>

      <div className="menu">
        <div className="list max-sm:hidden">
          <Menus menu={props.menus} />
        </div>
        <div className="mobile-nav sm:hidden">
          <div
            className={
              "mobile-nav-btn  z-[999] " +
              (isMobileMenuActive ? "active-mobile-menu" : "")
            }
            onClick={handleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isMobileMenuActive && (
            <MobileNav isActive={isMobileMenuActive} menus={props.menus} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
