import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { FaBars, FaTimes } from "react-icons/fa";
import Social from "../Social";

const NavBar = () => {
  const [fixedNavBar, setfixNavBar] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > 80) {
      setfixNavBar(true);
    } else {
      setfixNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <nav
      className={`h-20 w-full bg-white grid items-center ${
        fixedNavBar && `fixed shadow-lg md:bg-white`
      } md:bg-[color:var(--prim-10)] z-40`}
    >
      <div className="flex items-center justify-between px-4">
        {/* <img src="./images/logo.svg" class="nav-logo" alt="" />  */}
        <div>
          Belema <span>Achego</span>
        </div>
        {/* Menu Button */}
        <button className={`text-[2rem] text-[color:var(--prim-5)] md:hidden`} onClick={() => setshowSideBar(true)}>
          <FaBars />
        </button>
        <ul className="hidden md:flex items-center gap-x-8">
          <NavItem to={"/"}>home</NavItem>
          <NavItem to={"/about"}>about</NavItem>
          <NavItem to={"/projects"}>projects</NavItem>
          <NavItem to={"/contact"}>contact</NavItem>
        </ul>

        {/* Side Bar */}
        <ul className={`w-full h-[100vh] bg-[color:var(--grey-10)] top-0 left-0 fixed z-50 grid items-center justify-center [transition:var(--transition)] ${showSideBar?'-translate-x-0':'-translate-x-full'}`}>
          <div className="text-5xl top-4 right-4 text-red-600 absolute " onClick={() => setshowSideBar(false)}>
            <FaTimes />
          </div>
          <div className="w-fit m-auto space-y-16 p-4">
            <div className="flex flex-col items-center gap-y-7">
              <NavItem to={"/"} sm onClick={() => setshowSideBar(false)}>home</NavItem>
              <NavItem to={"/about"} sm onClick={() => setshowSideBar(false)}>about</NavItem>
              <NavItem to={"/projects"} sm onClick={() => setshowSideBar(false)}>projects</NavItem>
              <NavItem to={"/contact"} sm onClick={() => setshowSideBar(false)}>contact</NavItem>
            </div>
            <Social />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
