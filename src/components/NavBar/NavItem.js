import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, sm, onClick }) => {
  const sm_style =
    "text-[2rem] text-[color:var(--grey-5)] ";
  const md_style = "font-bold";
  return (
    <li>
      <NavLink
        to={to}
        className={`capitalize tracking-[var(--spacing)] hover:text-[color:var(--prim-5)] [transition:var(--transition)] ${sm ? sm_style : md_style}`}
        onClick={onClick}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
