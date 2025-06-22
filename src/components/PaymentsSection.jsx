import React, { useState } from "react";
import {
  FaEnvelope,
  FaDatabase,
  FaComments,
  FaMoneyCheck,
  FaCreditCard,
  FaRegClock,
} from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import PaymentsSvg from "../assets/payments.svg";
import { motion } from "framer-motion";
import GlowBlob from "../utilities/GlowBlob";

const tabData = {
  Payments: {
    logo: <BsCardText />,
    title: "Elevate Your Online Store's Payment Experience",
    description:
      "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
    features: [
      { icon: <FaEnvelope />, text: "Optimize Your Checkout" },
      { icon: <FaDatabase />, text: "Fast and Secure" },
      { icon: <FaComments />, text: "Smooth Integration" },
    ],
  },
  Payout: {
    logo: <MdGroups2 />,
    title: "Streamline Your Business Payouts",
    description:
      "Automate and scale your payout operations with our robust tools. Disburse funds quickly and securely to partners, vendors, and freelancers.",
    features: [
      { icon: <FaMoneyCheck />, text: "Instant Payouts" },
      { icon: <FaDatabase />, text: "Reliable Infrastructure" },
      { icon: <FaComments />, text: "Clear Reconciliation" },
    ],
  },
  Payroll: {
    logo: <BsCardText />,
    title: "Simplify Employee Payroll Management",
    description:
      "Manage employee salaries, taxes, and benefits with ease. Automate compliance and ensure timely payments, every cycle.",
    features: [
      { icon: <FaCreditCard />, text: "Automated Payments" },
      { icon: <FaDatabase />, text: "Tax Filing Ready" },
      { icon: <FaComments />, text: "Benefit Handling" },
    ],
  },
  "AI Banking": {
    logo: <IoTimerOutline />,
    title: "Smarter Banking with AI",
    description:
      "Leverage AI to optimize your business banking, fraud detection, and financial forecasting—all in real-time.",
    features: [
      { icon: <FaRegClock />, text: "Real-time Monitoring" },
      { icon: <FaDatabase />, text: "Predictive Insights" },
      { icon: <FaComments />, text: "Fraud Prevention" },
    ],
  },
};

const PaymentsTabs = () => {
  const [activeTab, setActiveTab] = useState("Payments");

  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center px-4 mb-8">
        <h2 className="text-xl sm:text-1xl md:text-2xl font-medium">
          <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            Enhancing{" "}
          </span>
          <span className="bg-gradient-to-r from-white to-[#3b3c40] bg-clip-text text-transparent">
            Payments
          </span>
        </h2>

        <h1 className="text-[26px] sm:text-[32px] md:text-[55px] leading-tight font-semibold text-center max-w-xl mx-auto mt-3">
          <span className="bg-gradient-to-r from-white via-[#c9c9c9] to-[#e3dede] bg-clip-text text-transparent">
            Powering Payments Across
          </span>{" "}
          <span className="bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">
            Industries
          </span>
        </h1>
      </div>

      {/* Tabs Container */}
      <div className="w-[90%] relative max-w-6xl mx-auto border-l-[1px] border-gray-400 bg-[#0b0c1a] mt-10 text-white py-10 px-4 md:px-16 rounded-3xl overflow-hidden">
        {/* Top and Bottom Gradient Borders */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-400 via-gray-300/25 to-gray-100/5 rounded-t-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-400 via-gray-300/25 to-gray-100/5 rounded-b-3xl" />

        {/* Tab Buttons */}
        <div className="w-full max-w-4xl m-auto relative z-10 flex flex-wrap md:justify-between justify-start items-center gap-4 border border-[#3c3f66] bg-[#101227] rounded-xl px-4 py-2 mb-10">
          {Object.entries(tabData).map(([tab, data]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex gap-2 items-center px-6 py-2 rounded-lg font-medium text-xl transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#21212C] text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="text-xl">{data.logo}</span>
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Text Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-6 max-w-xl"
          >
            <h2 className="text-1xl md:text-2xl font-medium leading-tight">
              {tabData[activeTab].title}
            </h2>
            <p className="text-gray-400 text-sm">
              {tabData[activeTab].description}
            </p>

            <div className="space-y-4">
              {tabData[activeTab].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-3 text-white/90"
                >
                  <div className="text-xl text-white/80">{feature.icon}</div>
                  <span className="text-white/40 text-xl">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 px-6 py-3 bg-gradient-to-br from-[#5d5fff] to-[#a571ff] rounded-xl shadow-lg text-white font-medium hover:opacity-90 transition">
              Get Started →
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 relative w-full h-full flex items-center justify-center"
          >
            <img
              src={PaymentsSvg}
              alt="Payments Graphic"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Glow Blob */}
        <GlowBlob className="absolute -z-0 top-1/2 right-0 -translate-y-1/2 w-full h-full sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[600px] bg-[#56677c87] shadow-cyanSmallShadow rounded-full blur-3xl animate-pulse opacity-70" />
      </div>
    </motion.section>
  );
};

export default PaymentsTabs;
