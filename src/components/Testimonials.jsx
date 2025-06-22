import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import User from "../assets/user.png";
import Star from "../assets/star.svg";
import CustomeSwiperNavButtons from "../utilities/CustomeSwiperNavButtons";
import GlowBlob from "../utilities/GlowBlob";

const testimonials = [
  {
    name: "Mickael Grants",
    role: "CEO",
    image: User,
    rating: 5,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    role: "CEO",
    image: User,
    rating: 5,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    role: "CEO",
    image: User,
    rating: 5,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    role: "CEO",
    image: User,
    rating: 5,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="relative w-[90%] mx-auto my-14 text-white overflow-hidden px-4 sm:px-6 md:px-14 pt-5 pb-12 testimonials"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Glow Backgrounds */}
      <GlowBlob className="absolute top-12 right-3 w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[500px] lg:h-[300px] bg-[#ac8cb387] blur-3xl rounded-full opacity-10 animate-pulse z-0" />
      <GlowBlob className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[250px] bg-[#ac8cb387] blur-3xl rounded-full opacity-10 animate-pulse z-0" />
      <GlowBlob className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[300px] bg-[#ac8cb387] blur-3xl rounded-full opacity-10 animate-pulse z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <button className="px-4 py-1 border border-[#2c2f3f] rounded-full text-sm text-gray-200/90 bg-[#0b0c1a] mb-4">
          Client Feedbacks
        </button>
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug text-gray-200/90">
          Trusted by <br className="hidden md:inline" /> Businesses Like Yours
        </h2>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop
        centeredSlides
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-10 pb-20"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl p-6 backdrop-blur-md transition-all duration-300 transform h-full
                  ${
                    isActive
                      ? "scale-105 bg-[#4b4b6d49] border border-indigo-500/60 shadow-xl z-20"
                      : "scale-[0.95] border border-[#303056] opacity-70"
                  }
                `}
              >
                <p className="text-gray-300 text-sm mb-6">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img key={i} src={Star} alt="star" className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="pt-2">
        <CustomeSwiperNavButtons />
      </div>
    </motion.section>
  );
};

export default Testimonials;
