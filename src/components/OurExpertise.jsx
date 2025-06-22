import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HiMiniArrowLongRight } from "react-icons/hi2";

// Import images
import shield from '../assets/sheild.svg';
import banking from '../assets/banking.svg';
import payouts from '../assets/payouts.svg';
import phone from '../assets/upi.png';
import bulkpayments from '../assets/bulkpayments.svg';
import CustomeSwiperNavButtons from "../utilities/CustomeSwiperNavButtons";
import SectionHeading from "../utilities/SectionHeading";

const cardsData = [
  {
    id: 1,
    title: "UPI Autopay",
    description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
    image: phone,
  },
  {
    id: 2,
    title: "API Banking",
    description: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
    image: banking, // or use another image if available
  },
  {
    id: 3,
    title: "Payouts",
    description: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
    image: payouts,
  },
  {
    id: 4,
    title: "Bulk Payments",
    description: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
    image: bulkpayments,
  },
  {
    id: 5,
    title: "UPI Autopay",
    description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
    image: phone,
  },
  {
    id: 6,
    title: "API Banking",
    description: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
    image: banking, // or use another image if available
  },
];


// Card Component
const Card = ({ id, title, description, image }) => (

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}>
    <div
      className="card relative w-[320px] m-auto sm:max-w[320px] h-[460px] p-[1px] rounded-[20px] bg-gradient-to-br from-purple-300/10 via-purple-400/90 to-transparent"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 85% 100%, 0% 100%)" }}
    >
      <div
        className="w-full h-full bg-[#0B0B0F] rounded-[20px] p-6 text-white"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 85% 100%, 0% 100%)" }}
      >
        {/* top-left, top-right, slant start, bottom-right slant, bottom-left */}
        <div className="absolute top-5 right-10 z-10">
          <img src={shield} alt="shield" />
        </div>

        <div className="flex justify-center items-center mt-10 mb-2 mx-auto w-full max-w-xs h-auto">
          <img
            src={image}
            alt={title}
            className={`object-contain w-full max-h-40 sm:max-h-48 md:max-h-52 lg:max-h-56 ${id === 4 ? 'relative bottom-4' : ''}`}
          />
        </div>

        <h2 className="text-xl font-normal mb-3">{title}</h2>
        <p className="text-base text-gray-300 mb-10 font-normal leading-relaxed">{description}</p>

        <div className="absolute bottom-4 right-20">
          <HiMiniArrowLongRight className="text-purple-400 text-4xl cursor-pointer transition-transform duration-300 hover:scale-125" />
        </div>
      </div>
    </div>
  </motion.div>

);

// Main Section
const OurExpertise = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}>
      <section className="bg-black text-white py-16 sm:px-6 w-[90%] m-auto">

        <SectionHeading title='Our Expertise' firstTxt="Redefining Payment " secondTxt="Processing For You" />

        <div className="relative">
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="pb-16"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <CustomeSwiperNavButtons />

        </div>
      </section>
    </motion.div>
  );
};

export default OurExpertise;
