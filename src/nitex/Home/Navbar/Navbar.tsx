import { Col } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavMenu from './Navmenu';

type NavbarType = {};
const Navbar: React.FC<NavbarType> = () => {
  return (
    <div className=" flex items-center justify-between mx-[3%]   xl:mx-[12%]  ">
      <Col className="min-w-[100px]">
      <NavLink  to="/"><img
          width="90"
          height="70"
          src="https://nitex.com/wp-content/uploads/2022/08/nitex_logo.png"
          className="svg-main-logo entered lazyloaded"
          alt=""
          data-ll-status="loaded"
        /></NavLink>
        
      </Col>
      <Col className="flex lg:justify-between justify-end w-full items-center  ml-[50px] lg:ml-[200px] mr-[20px]">
        <NavMenu />
      </Col>
    </div>
  );
};

export default Navbar;
