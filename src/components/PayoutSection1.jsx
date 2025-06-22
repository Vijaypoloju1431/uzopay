import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

import Svg1 from "../assets/hex.svg";
import Svg2 from "../assets/Glitter line.svg";
import Svg3 from "../assets/API.svg";
import Svg4 from "../assets/Transfer (1).svg";
import Svg5 from "../assets/Transfer.svg";
import Svg6 from "../assets/Scan.svg";
import Svg7 from "../assets/Link.svg";
import Svg8 from "../assets/Instant.svg";
import Svg9 from "../assets/Data 1.svg";

const PayoutSection1 = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0c0c1d] to-[#06030f] text-white p-6 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-lg space-y-6">
                <button className="bg-transparent border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm">Payout Service Centric</button>

                <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
                    Streamlined for Payout Ease and Efficiency
                </h1>

                <div className="space-y-4">
                    <div>
                        <h2 className="text-white font-semibold">Comprehensive Documentation</h2>
                        <p className="text-gray-400">
                            Access clear, detailed documentation that simplifies integration and accelerates your payout setup.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 font-semibold">Quick Start SDKs</h2>
                        <p className="text-gray-500">
                            Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-gray-500 font-semibold">Sandbox Environment</h2>
                        <p className="text-gray-500">
                            Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.
                        </p>
                    </div>
                </div>

                <button className="mt-4 px-6 py-3 rounded-xl bg-[#3e3eff] hover:bg-[#5757ff] transition text-white font-medium shadow-xl">
                    Get Started →
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 relative w-[300px] sm:w-[400px] md:w-[500px]">
                {/* Each hexagon slot */}
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="relative w-full aspect-[1.15]">
                        <img src={Svg1} alt={`hex-${i}`} className="w-full h-full object-contain" />
                        {/* Conditionally render icons */}
                        {i === 0 && <img src={Svg5} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                        {i === 1 && <img src={Svg3} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                        {i === 2 && <img src={Svg7} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                        {i === 3 && <img src={Svg4} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                        {i === 4 && <img src={Svg8} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                        {i === 5 && <img src={Svg6} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                        {i === 6 && <img src={Svg9} alt="icon" className="absolute inset-0 m-auto w-6 sm:w-8" />}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PayoutSection1;
