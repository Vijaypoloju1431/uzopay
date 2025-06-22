import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.svg';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY < 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        // <div
    //   className="bg-black/90 shadow-md backdrop-blur-sm py-4"
    // >
    <div
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-black/90 shadow-md py-4' : 'bg-black py-6'
      }`}
    >

      <nav className="w-[90%] max-w-[1200px] m-auto transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo text-white text-xl font-semibold cursor-pointer"><img src={logo} alt="" /></div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-10">
            <ul className="flex gap-x-7 text-sm text-white">
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Ai Banking</li>
              <li className="cursor-pointer">Payments</li>
              <li className="cursor-pointer">Payouts</li>
              <li className="cursor-pointer">Contact US</li>
            </ul>
          </div>
          <div className='hidden lg:flex'>
            <ul className="flex gap-x-7 text-sm text-white items-center">
              <li className="cursor-pointer">Login In</li>
              <li className="custom-border-animation bg-black relative border rounded-3xl py-2 px-6 cursor-pointer ">
                Sign In
              </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden text-white">
            {isOpen ? (
              <FiX className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`transition-all duration-300 overflow-hidden lg:hidden ${isOpen ? 'max-h-[500px] mt-4 mb-1' : 'max-h-0'
            }`}
        >
          <ul className="flex flex-col justify-center items-center gap-y-4 text-sm text-white">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Ai Banking</li>
            <li className="cursor-pointer">Payments</li>
            <li className="cursor-pointer">Payouts</li>
            <li className="cursor-pointer">Contact US</li>
            <li className="cursor-pointer">Login In</li>
            <li className="custom-border-animation bg-black relative border rounded-3xl py-2 px-6 w-fit cursor-pointer">
              Sign In
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
