import React from 'react';
import { NavLink } from 'react-router-dom';

type NavMenuType = {};
const NavMenu: React.FC<NavMenuType> = () => {
  return (
    <>
      <NavLink className="hidden lg:block" to="/">
        Home
      </NavLink>
      <NavLink className="hidden lg:block" to="/about">
        About
      </NavLink>
      <NavLink className="hidden lg:block" to="/how-it-works">
        How It Works
      </NavLink>
      <NavLink className="hidden lg:block" to="/pricing">
        Pricing
      </NavLink>
      <NavLink className="hidden lg:block" to="/testimonials">
        Testimonials
      </NavLink>
      <NavLink className="nav-contact" to="/contact">
        <button className="">
          Contact Us
        </button>
      </NavLink>
    </>
  );
};

export default NavMenu;
