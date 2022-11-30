import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/images";
import { path } from '../../utils/constant'
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'



const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <header className="sticky top-0 left-0 mx-auto bg-white shadow-[0_0_12px_rgba(0,0,0,0.1)]">
      <div className="hidden lg:block  w-[1280px] mx-auto relative h-[100px]">
        <div className="w-[100px] h-[100px] absolute top-1/2 left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <NavLink to={path.HOME}>
            <img className="max-w-full mt-[13px]" src={logo.logoHeader} alt="The Modern Touch" />
          </NavLink>

        </div>

        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="text-right text-xl font-serif uppercase ">
            <li className="inline-block float-left  text-left">
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600] p-[10px_40px] block' : 'p-[10px_40px] block')} to={path.ABOUT}>about us</NavLink>
            </li>
            <li className="inline-block float-left text-left">
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600] p-[10px_40px] block' : 'p-[10px_40px] block')} to={path.SERVICES}>services</NavLink>
            </li>
            <li className="inline-block float-left text-left">
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600] p-[10px_40px] block' : 'p-[10px_40px] block')} to={path.PROJECT}>projects</NavLink>
            </li>
            <li className="inline-block float-none ">
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600] p-[10px_40px] block' : 'p-[10px_40px] block')} to={path.NEWS}>news</NavLink>
            </li>
            <li className="inline-block float-none ]">
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600] p-[10px_40px] block' : 'p-[10px_40px] block')} to={path.CAREERS}>careers</NavLink>
            </li>
            <li className="inline-block float-none]">
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600] p-[10px_40px] block' : 'p-[10px_40px] block')} to={path.CONTACT}>contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative lg:hidden ">
        <div className="relative flex justify-between items-center h-[100px] w-full p-4 shadow-[0_0_12px_rgba(0,0,0,0.1)] bg-white z-50">
          <div className="w-20 h-20 flex justify-center items-center">
            <NavLink to={path.HOME}>
              <img className="max-w-full" src={logo.logoHeader} alt="The Modern Touch" />
            </NavLink>
          </div>
          <Hamburger color="#fe5600" rounded toggled={isOpen} toggle={setOpen} />
        </div>

        <div className={`${isOpen ? "block transform translate-y-[0px]" : "transform -translate-y-[100vh]"} absolute top-[100px] bg-white transition duration-700 ease-out w-full -left-[-0px] z-10`}>
          <ul className="text-center uppercase pt-6  border border-[#fe5600] border-t-1 border-l-0 border-r-0 border-b-0">
            <li className="h-8" onClick={() => setOpen(!isOpen)}>
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600]' : '')} to={path.ABOUT}>about</NavLink>
            </li>
            <li className="h-8" onClick={() => setOpen(!isOpen)}>
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600]' : '')} to={path.PROJECT}>projects</NavLink>
            </li>
            <li className="h-8" onClick={() => setOpen(!isOpen)}>
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600]' : '')} to={path.SERVICES}>services</NavLink>
            </li>
            <li className="h-8" onClick={() => setOpen(!isOpen)}>
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600]' : '')} to={path.NEWS}>news</NavLink>
            </li>
            <li className="h-8" onClick={() => setOpen(!isOpen)}>
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600]' : '')} to={path.CAREERS}>careers</NavLink>
            </li>
            <li className="h-8" onClick={() => setOpen(!isOpen)}>
              <NavLink className={({ isActive }) => (isActive ? 'text-[#fe5600]' : '')} to={path.CONTACT}>contact</NavLink>
            </li>
          </ul>
        </div>

      </div>

    </header>
  );
};

export default Header;
