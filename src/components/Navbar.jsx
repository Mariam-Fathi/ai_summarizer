import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BiMessage } from 'react-icons/bi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
        <a 
          href="/" 
          className="relative flex justify-center items-center"
        >
          <BiMessage className="w-[50%] h-[55px] max-sm:h-[43px] text-[#FF4820] relative opacity-90 top-[3px] max-sm:top-[2px]"/>
          <span className="text-white text-[32px] max-sm:text-[24px] font-BlackOpsOne font-medium relative right-[38px] max-sm:right-[29px] ">
            SUMM
          </span>
        </a>
        </div>
        <div className="navbar-links_container">
          <p><a href="/">What is SUMM?</a></p>
          <p><a href="#demo">Get Started</a></p>
          <p><a href="/">Help Center</a></p>
          <p><a href="#footer">Contact Us</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button"><a href="#premium">Explore Premium</a></button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><a href="/">What is SUMM?</a></p>
          <p><a href="#demo">Get Started</a></p>
          <p><a href="/">Help Center</a></p>
          <p><a href="#footer">Contact Us</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button"><a href="#premium">Explore Premium</a></button>
          </div>
        </div>
        )}s
      </div>
    </div>
  );
};

export default Navbar;
