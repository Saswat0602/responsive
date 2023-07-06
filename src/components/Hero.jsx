import React from 'react'
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w[800px] mt-[-96px] h-screen text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH THE TECHNOLOGY
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Time.
        </h1>

        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero
