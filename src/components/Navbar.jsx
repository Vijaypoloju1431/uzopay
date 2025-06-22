import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { isAuthenticated, user, logout, setShowModal, setAuthMode } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold"
      : "text-white hover:text-cyan-300 transition-colors";
  return (
    <div
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black/90 shadow-md py-4 fixed" : "bg-black py-6 relative"
      }`}
    >
      <nav className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-white text-xl font-semibold">
            <img src={logo} alt="Logo" className="w-28" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-10">
            <ul className="flex gap-x-7 text-sm">
              <li><NavLink to="/products" className={linkClasses}>Products</NavLink></li>
              <li><NavLink to="/banking" className={linkClasses}>Ai Banking</NavLink></li>
              <li><NavLink to="/" className={linkClasses}>Payments</NavLink></li>
              <li><NavLink to="/payout" className={linkClasses}>Payouts</NavLink></li>
              <li><NavLink to="/contactus" className={linkClasses}>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-x-6">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    setAuthMode("login");
                    setShowModal(true);
                  }}
                  className={linkClasses({ isActive: false })}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setAuthMode("signup");
                    setShowModal(true);
                  }}
                  className="custom-border-animation relative border bg-black border-white px-6 py-2 rounded-3xl hover:bg-white hover:text-black transition"
                >
                  Sign In
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4 text-white">
                <FiUser className="text-xl" />
                <span className="text-sm">{user.name}</span>
                <button
                  onClick={logout}
                  className="custom-border-animation px-6 py-2 bg-black relative border border-white rounded-3xl hover:bg-white hover:text-black transition text-sm"
                >
                  Logout
                </button>
              </div>
            )}
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

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-3xl"></div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 overflow-hidden lg:hidden ${
            isOpen ? "max-h-[500px] mt-14 mb-1" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-y-4 pb-5 text-sm text-white">
            <li><NavLink to="/products" onClick={() => setIsOpen(false)} className={linkClasses}>Products</NavLink></li>
            <li><NavLink to="/banking" onClick={() => setIsOpen(false)} className={linkClasses}>Ai Banking</NavLink></li>
            <li><NavLink to="/" onClick={() => setIsOpen(false)} className={linkClasses}>Payments</NavLink></li>
            <li><NavLink to="/payout" onClick={() => setIsOpen(false)} className={linkClasses}>Payouts</NavLink></li>
            <li><NavLink to="/contactus" onClick={() => setIsOpen(false)} className={linkClasses}>Contact Us</NavLink></li>
            {!isAuthenticated ? (
              <>
                <li>
                  <button
                    onClick={() => {
                      setAuthMode("login");
                      setShowModal(true);
                      setIsOpen(false);
                    }}
                    className={linkClasses({ isActive: false })}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setAuthMode("signup");
                      setShowModal(true);
                      setIsOpen(false);
                    }}
                    className="custom-border-animation relative border px-6 py-2 rounded-3xl bg-black"
                  >
                    Sign In
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center gap-2">
                  <FiUser /> {user.name}
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="custom-border-animation relative border bg-black px-6 py-2 rounded-3xl"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
