import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function CustomeSwiperNavButtons() {
  return (
   
          <div className="flex justify-center items-center gap-6 mt-6 relative z-10">
            <button className="custom-prev bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-gray-500 hover:border-purple-400 transition-all duration-300">
              <FaArrowLeft className="text-white text-sm" />
            </button>

            <button className="custom-next bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-gray-500 hover:border-purple-400 transition-all duration-300">
               <FaArrowRight className="text-white text-sm" />
            </button>
          </div>
  )
}

export default CustomeSwiperNavButtons