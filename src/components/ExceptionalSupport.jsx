import React from "react";
import { motion } from "framer-motion";
import { HiMiniArrowLongRight } from "react-icons/hi2";

// SVG imports
import ChipSvg from "../assets/exceptionalSupportImages/Chip.svg";
import AvatarSvg from "../assets/exceptionalSupportImages/AvatarProgress.svg";
import DesktopSvg from "../assets/exceptionalSupportImages/Device Desktop.svg";
import PlaySvg from "../assets/exceptionalSupportImages/Play.svg";
import FolderSvg from "../assets/exceptionalSupportImages/Folder.svg";
import FileSvg from "../assets/exceptionalSupportImages/File.svg";
import LaptopSvg from "../assets/exceptionalSupportImages/Device Laptop 2.svg";
import MobileSvg from "../assets/exceptionalSupportImages/Device Mobile.svg";
import SymbolSvg from "../assets/exceptionalSupportImages/Symbol.svg";
import Iphone from "../assets/exceptionalSupportImages/iPhone.svg";
import ReasonsSvg from "../assets/exceptionalSupportImages/reason-sec-cir-bg.svg";
import CirBgSvg from "../assets/exceptionalSupportImages/cir-bg.svg";
import ChatSvg from "../assets/exceptionalSupportImages/ChatSquareDoubleText.svg";
import GlowBlob from "../utilities/GlowBlob";
import SectionHeading from "../utilities/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};

const ExceptionalSupport = () => {
  return (
    <motion.section
      className="relative w-[90%] mx-auto py-20 px-4 md:px-12 lg:px-24 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Glow blobs */}
      <GlowBlob className="absolute -z-0 top-[20%] left-[10%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-[#8fb2dc87] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-80" />
      <GlowBlob className="absolute -z-0 bottom-[20%] right-[10%] w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#c7daf2e1] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-80" />
      <GlowBlob className="absolute -z-0 top-[20%] right-[10%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[#94afd187] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-80" />
      <GlowBlob className="absolute -z-0 top-[40%] left-32 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#89acd587] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-80" />
      <GlowBlob className="absolute -z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[500px] sm:h-[500px] bg-[#a3c0e487] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-80" />
      <GlowBlob className="absolute -z-0 hidden md:flex left-[45%] top-[60%] transform -translate-x-[100%] -translate-y-1/2 w-[150px] pinggg h-[150px] sm:w-[150px] sm:h-[150px] bg-[#f1f4f7e8] shadow-cyanSmallShadow rounded-full opacity-100" />

      <SectionHeading title="Reasons to Partner" firstTxt="Exceptional Support For Your" secondTxt="Success" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
        {/* 1. Top Left Card */}
        <motion.div
          className="col-span-12 md:col-span-4 bg-[#303d7672] rounded-2xl p-6 border border-[#2c2f3f] backdrop-blur-xl flex flex-col justify-between"
          variants={fadeUp}
          custom={0.1}
        >
          <div className="relative">
            <img src={ReasonsSvg} alt="Optimize Customer" className="w-full h-full max-h-28" />
            <img src={ChipSvg} alt="Chip" className="w-8 h-8 absolute right-4 top-3" />
          </div>
          <h3 className="text-lg font-semibold textGlow pt-2">
            Optimize customer <span className="font-normal">journeys</span>
          </h3>
          <p className="text-base text-gray-400">
            Streamlined transactions enhancing efficiency and customer satisfaction.
          </p>
          <button className="mt-4 w-36 text-sm border py-2 px-6 border-cyan-50 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/60 hover:text-gray transition">
            <span>Explore</span> <HiMiniArrowLongRight />
          </button>
        </motion.div>

        {/* 2. Top Right Card */}
        <motion.div
          className="col-span-12 md:col-span-8 bg-[#303d7672] rounded-2xl p-6 border border-[#2c2f3f] backdrop-blur-xl flex flex-col justify-between"
          variants={fadeUp}
          custom={0.2}
        >
          <h3 className="text-lg font-semibold textGlow pt-2">Faster Processing Time</h3>
          <p className="mt-2 text-base text-gray-400">
            Quick and efficient payment processing for a seamless user experience.
          </p>
          <button className="mt-4 w-36 text-sm border py-2 px-6 border-cyan-50 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/60 hover:text-gray transition">
            <span>Explore</span> <HiMiniArrowLongRight />
          </button>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 border border-cyan-400/10 rounded-xl p-5 mt-6 w-full">
            <img src={PlaySvg} alt="Play" className="w-16 sm:w-20 h-auto" />
            <img src={Iphone} alt="iPhone" className="w-24 sm:w-36 h-auto object-contain" />
            <img src={SymbolSvg} alt="Symbol" className="w-16 sm:w-24 h-auto object-contain" />
          </div>
        </motion.div>

        {/* 3. Bottom Left Card */}
        <motion.div
          className="col-span-12 md:col-span-8 bg-[#303d7672] rounded-2xl p-6 border border-[#2c2f3f] backdrop-blur-xl flex flex-col justify-between"
          variants={fadeUp}
          custom={0.3}
        >
          <div className="relative border border-cyan-400/10 rounded-xl h-44 overflow-hidden">
            <img src={CirBgSvg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <img src={AvatarSvg} alt="Avatar" className="relative w-auto h-full mx-auto object-contain z-10" />
          </div>
          <h3 className="text-lg font-semibold textGlow pt-4">Flexible Solutions</h3>
          <p className="mt-2 text-base text-gray-400">
            Customizable options to meet the unique needs of your business.
          </p>
          <button className="mt-4 w-36 text-sm border py-2 px-6 border-cyan-50 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/60 hover:text-gray transition">
            <span>Explore</span> <HiMiniArrowLongRight />
          </button>
        </motion.div>

        {/* 4. Bottom Right Card */}
        <motion.div
          className="col-span-12 md:col-span-4 bg-[#303d7672] rounded-2xl p-6 border border-[#70e3ed] backdrop-blur-xl flex flex-col justify-between"
          variants={fadeUp}
          custom={0.4}
        >
          <h3 className="text-lg font-semibold textGlow">
            Effortless <span className="font-normal">Integration</span>
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Simple API integration with your existing systems and platforms.
          </p>
          <button className="mt-4 w-36 text-sm border py-2 px-6 border-cyan-50 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/60 hover:text-gray transition">
            <span>Explore</span> <HiMiniArrowLongRight />
          </button>
          <div className="border-cyan-400/10 border rounded-xl px-3 py-4 pb-0 mt-6">
            <div className="flex justify-between items-center gap-3">
              <img src={MobileSvg} alt="Mobile" className="w-12 p-2 rounded-lg border border-cyan-200/30" />
              <img src={LaptopSvg} alt="Laptop" className="w-12 p-2 rounded-lg border border-cyan-200/30" />
              <img src={DesktopSvg} alt="Desktop" className="w-12 p-2 rounded-lg border border-cyan-200/30" />
            </div>
            <div className="flex justify-between items-center gap-3 -mb-1 mt-4">
              <img src={FileSvg} alt="File" className="w-12 p-2 rounded-lg border-t border-l border-r border-cyan-200/30" />
              <img src={FolderSvg} alt="Folder" className="w-12 p-3 pt-2 rounded-lg border-t border-l border-r border-cyan-200/30" />
              <img src={ChatSvg} alt="Chat" className="w-12 p-2 rounded-lg border-t border-l border-r border-cyan-200/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExceptionalSupport;
