import React, { useState } from "react";
import { motion } from "framer-motion";
import hexagon from "../assets/Hexagon.svg";
import hexagonHover from "../assets/Hexagon-hover.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import Svg1 from "../assets/hex.svg";
import Svg2 from "../assets/GlitterLine.svg";
import Svg3 from "../assets/API.svg";
import Svg4 from "../assets/Transfer (1).svg";
import Svg5 from "../assets/Transfer.svg";
import Svg6 from "../assets/Scan.svg";
import Svg7 from "../assets/Link.svg";
import Svg8 from "../assets/Instant.svg";
import Svg9 from "../assets/Data.svg";
import GlowBlob from "../utilities/GlowBlob";

// Individual Hexagon
const Hexagon = ({ svg }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative">
            <img
                src={hovered ? hexagonHover : hexagon}
                alt="hex"
                className="w-[180px] h-[160px] transition duration-300 relative z-10"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            {svg && (
                <img
                    src={svg}
                    alt=""
                    className="absolute -z-0"
                    style={{ top: "16px", left: "20px" }}
                />
            )}
        </div>
    );
};

const PayoutSection = () => {
    return (
        <div className="w-[90%] pl-2 flex-wrap relative m-auto min-h-screen text-white flex flex-col md:flex-row items-center gap-x-24">

            {/* LEFT SECTION */}
            <motion.div
                className="flex-1 max-w-[600px] space-y-6"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <button className="px-5 py-2 rounded-full border border-cyan-500 text-gray-300 text-base bg-[#32326173]/40 backdrop-blur-md shadow-[0_0_8px_rgba(0,255,255,0.15)] hover:shadow-[0_0_12px_rgba(0,255,255,0.3)] transition">
                    Payout Service Centric
                </button>

                <h1 className="text-3xl md:text-[40px] font-medium leading-tight text-[#c9c9c9]">
                    Streamlined for Payout Ease and Efficiency
                </h1>

                <div className="relative mt-10 comprehensiveDoc">
                    <div className="pb-5">
                        <h2 className="text-white font-semibold text-lg pb-2">Comprehensive Documentation</h2>
                        <p className="text-gray-300">
                            Access clear, detailed documentation that simplifies integration and accelerates your payout setup.
                        </p>
                    </div>

                    <div className="pb-5">
                        <h2 className="text-gray-500 font-semibold text-lg pb-2">Quick Start SDKs</h2>
                        <p className="text-gray-500">
                            Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 font-semibold text-lg pb-2">Sandbox Environment</h2>
                        <p className="text-gray-500">
                            Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.
                        </p>
                    </div>
                </div>

                <div className="relative z-0">
                    <button className="group relative px-6 py-3 rounded-xl text-white font-medium bg-[#0d0d1c] shadow-[0_0_20px_rgba(93,106,255,0.4)] overflow-hidden">
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-[30px] opacity-70 group-hover:opacity-100 transition-all duration-500"></span>
                        <span className="absolute inset-0 rounded-xl border border-[#3e3eff] opacity-30 group-hover:opacity-60 transition duration-300"></span>
                        <span className="relative getStaredBtn z-10 flex items-center gap-2 text-sm sm:text-base">
                            Get Started
                            <HiArrowNarrowRight className="text-lg" />
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* RIGHT HEXAGON SECTION */}
            <motion.div
                className="hidden md:flex relative w-[568px] mx-auto"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="flex items-center justify-start">
                    {/* Column 1 */}
                    <div className="flex gap-0 flex-col w-[160px]">
                        <Hexagon svg={Svg9} />
                        <div className="relative">
                            <img
                                src={hexagonHover}
                                alt="hex"
                                className="w-[180px] h-[160px] transition duration-300"
                            />
                            <img
                                src={Svg5}
                                alt=""
                                className="absolute"
                                style={{ top: "16px", left: "20px" }}
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex gap-0 flex-col w-[160px] -m-6">
                        <Hexagon svg={''} />
                        <Hexagon svg={Svg3} />
                        <Hexagon svg={Svg4} />
                    </div>

                    {/* Column 3 */}
                    <div className="flex gap-0 flex-col w-[160px]">
                        <Hexagon svg={''} />
                        <Hexagon svg={Svg7} />
                        <Hexagon svg={Svg6} />
                        <Hexagon svg={''} />
                    </div>

                    {/* Column 4 */}
                    <div className="flex gap-0 flex-col w-[160px] absolute right-0 top-[240px]">
                        <Hexagon svg={''} />
                        <Hexagon svg={Svg8} />
                    </div>
                </div>
            </motion.div>

            {/* GLOW BLOB BACKGROUND */}
            <div className="sm:max-w-[300px] sm:max-h-[400px]">
                <GlowBlob className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] sm:max-w-[300px] sm:max-h-[300px] rounded-full bg-violet-500 opacity-20 animate-pulse shadow-cyanMediumShadow blur-[100px] z-0 pointer-events-none" />
            </div>
        </div>
    );
};

export default PayoutSection;
