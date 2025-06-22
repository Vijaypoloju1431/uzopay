import React from 'react'

function SectionHeading({ title, firstTxt, secondTxt }) {
  console.log(title, firstTxt, secondTxt )
  return (
    <div className="max-w-6xl mx-auto text-center px-4 mb-8">
      <h2 className="text-xl sm:text-1xl md:text-2xl font-medium">
        <span className="bg-gradient-to-r from-white via-white to-[#3b3c40] bg-clip-text text-transparent">{title}</span>
      </h2>

      <h1 className="text-[26px] sm:text-[32px] md:text-[50px] leading-tight font-semibold text-center mt-3">
        <span className="bg-gradient-to-r from-white via-[#c3c3c3] to-[#a0a0a0] bg-clip-text text-transparent">{firstTxt}</span>
        <br />
        <span className="bg-gradient-to-r from-white via-[#c3c3c3] to-[#a0a0a0] bg-clip-text text-transparent">{secondTxt}</span>
      </h1>
    </div>
  );
}

export default SectionHeading;
