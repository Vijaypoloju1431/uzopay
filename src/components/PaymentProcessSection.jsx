
import { motion } from "framer-motion";
import GlowBlob from "../utilities/GlowBlob";
import TitleLightning from "../assets/title-lighting.svg";
import SandBoxEnv from "../assets/sandBoxEnv.svg";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const PaymentProcessSection = () => {
  return (
    <section className="relative w-[90%] mx-auto py-16 px-4 md:px-12 lg:px-24">
      {/* Glow Background Blob */}
      <GlowBlob
        className="absolute z-0 top-5 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#56677c87] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 relative flex-col sm:flex-row space-y-6 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <div className="flex gap-8 items-center">
            <button className="px-5 py-2 h-10 rounded-full border border-cyan-500 text-gray-300 text-sm bg-[#1a1a1a]/40 backdrop-blur-md shadow-[0_0_8px_rgba(0,255,255,0.15)] hover:shadow-[0_0_12px_rgba(0,255,255,0.3)] transition">
              Reliable, and Efficient
            </button>

            <img
              src={TitleLightning}
              alt="Title lightning"
              className="w-32 md:w-48 mx-auto lg:mx-0 "
            />

          </div>
          <h2 className="text-white text-4xl md:text-5xl font-medium leading-tight">
            Simplify the <br className="hidden md:block" /> payments process
          </h2>

          <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0">
            Tools crafted to simplify and enhance your payout processes.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <img
            src={SandBoxEnv}
            alt="SDK Diagram"
            className="w-full max-w-xl mx-auto border border-gray-700/50 rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentProcessSection;
