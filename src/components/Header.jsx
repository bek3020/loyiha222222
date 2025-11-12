import React, { useState } from "react";
import Logo from "../assets/svg/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" text-white w-full mb-[49px]">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center py-4 px-6">
        
        <img src={Logo} alt="Logo" className="w-28" />

      
        <ul className="hidden md:flex gap-12 mt-3 text-[17px]">
          <li className="hover:text-[#018ABE] transition">Services</li>
          <li className="hover:text-[#018ABE] transition">Our works</li>
          <li className="hover:text-[#018ABE] transition">About us</li>
          <li className="hover:text-[#018ABE] transition">Contact us</li>
        </ul>

      
        <button className="hidden md:block text-white px-6 py-2 bg-[#018ABE] rounded-3xl hover:bg-[#019fe2] transition">
          Get Started
        </button>

      
        <div
          className="md:hidden text-3xl cursor-pointer select-none"
          onClick={() => setMenuOpen(!menuOpen)}>☰
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-[#0C151C] border-t border-gray-700">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li className="hover:text-[#018ABE] transition">Services</li>
            <li className="hover:text-[#018ABE] transition">Our works</li>
            <li className="hover:text-[#018ABE] transition">About us</li>
            <li className="hover:text-[#018ABE] transition">Contact us</li>
            <button className="bg-[#018ABE] px-6 py-2 rounded-3xl hover:bg-[#019fe2] transition">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;