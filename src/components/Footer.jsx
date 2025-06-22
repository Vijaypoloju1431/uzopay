import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0. }}>
      <footer className="bg-black text-white pt-5 px-6 w-full max-w-[1400px] mx-auto overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Description (3 columns on desktop) */}
          <div className="lg:col-span-5 lg:w-[85%]">
            <h2 className="text-2xl font-semibold mb-4">UzOPay</h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Our payment gateway simplifies transactions for e-commerce
              businesses, delivering fast and secure processing. With smooth
              integration, we enhance your store's payment capabilities. Optimize
              your checkout process and boost customer satisfaction easily.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="border border-gray-600 w-10 h-10 flex items-center justify-center rounded-full hover:border-white transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Links (2 cols each) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold border-l border-gray-500 pl-2 mb-4">Payment</h4>
              <ul className="text-sm space-y-2 ml-2 text-gray-300">
                <li className="cursor-pointer hover:underline hover:opacity-70">Payment Gateway</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">Payment Links</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">Payment Methods</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">Bulk Payment</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">Invoice</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold border-l border-gray-500 pl-2 mb-4">AI Banking</h4>
              <ul className="text-sm space-y-2 ml-2 text-gray-300">
                <li className="cursor-pointer hover:underline hover:opacity-70">Current Account</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">Accounting</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">API Banking</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">UPI Autopay</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">Tax Payment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold border-l border-gray-500 pl-2 mb-4 lg:invisible">Other</h4>
              <ul className="text-sm space-y-2 ml-2 text-gray-300">
                <li className="cursor-pointer hover:underline hover:opacity-70">Cards</li>
                <li className="cursor-pointer hover:underline hover:opacity-70">CMS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold border-l border-gray-500 pl-2 mb-4">Company</h4>
              <ul className="text-sm space-y-2 ml-2 text-gray-300">
                <li>
                  <NavLink
                    to="/about"
                    className="hover:underline hover:opacity-70 block w-fit"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactus"
                    className="hover:underline hover:opacity-70 block w-fit"
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-6">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 px-2">
            <p className="mb-4 sm:mb-0">© 2025 UzOPay</p>
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white"
              >
                <IoIosArrowUp className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </motion.footer>
  );
};

export default Footer;
