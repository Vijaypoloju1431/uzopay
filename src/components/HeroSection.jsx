import React from "react";
import { motion } from "framer-motion";
import star from '../assets/Glitter_R.svg'
const HeroSection = () => {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center text-center px-4 sm:px-0">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#5f00a5] via-black to-black z-0" />

      {/* Content */}
      <div className="relative z-20 pt-10 pb-12 sm:pt-14 sm:pb-20 md:pt-16 md:pb-28">
        <motion.h1 initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text mb-7">
          New Era of Finance Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-1xl text-gray-300 mb-8"
        >
          Fast Funds, Flexible Choices: Quick Settlement & Multiple Payment Methods
        </motion.p>
        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="custom-button-backdrop text-base text-gray cursor-pointer w-[160px] bg-gray-800 rounded-3xl px-4 py-3 hover:bg-white/20 transition mx-auto"
        >
          Explore more
        </motion.div>

        {/* Tagline Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg mt-6 text-purple-300"
        >
          <span>Empowering Your Financial Future, Today and Tomorrow</span>
          <img src={star} alt="star" className="inline-block w-5 h-5 mx-2" />
          <span>One-Stop Solution</span>
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;
