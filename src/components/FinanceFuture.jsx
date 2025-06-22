import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import FutureFinanaceSvg from "../assets/futureFinanace.svg";

const FinanceFuture = () => {
  return (
    <section
      className="relative w-[90%] mx-auto my-20 overflow-hidden py-20 px-6 md:px-12 lg:px-16
                 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${FutureFinanaceSvg})`,
      }}
    >
      {/* Overlay to remove background on small screens */}
      <div className="absolute inset-0 bg-[#0b0c1a] md:bg-transparent z-0 transition-all duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white gap-12 md:gap-20">
        {/* Left Content */}
        <motion.div
          className="flex text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.3] md:leading-[1.1] text-gray-200/90">
            Let’s build the <br />
            <span className="block mt-2">future of finance together</span>
          </h1>
        </motion.div>

        {/* Right Button */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <button className="group relative px-6 py-3 rounded-xl text-white font-medium bg-[#0d0d1c] shadow-[0_0_20px_rgba(93,106,255,0.4)] overflow-hidden">
            {/* Glow Layer */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-[30px] opacity-70 group-hover:opacity-100 transition-all duration-500"></span>

            {/* Border Overlay */}
            <span className="absolute inset-0 rounded-xl border border-[#3e3eff] opacity-30 group-hover:opacity-60 transition duration-300"></span>

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              Get Started
              <HiArrowNarrowRight className="text-lg" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinanceFuture;
