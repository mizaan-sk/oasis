import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white md:py-14 py-12 px-4 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-15 md:w-17 mx-auto">
            <Image
              src="/assets/Banner_Logo.webp"
              width={112}
              height={112}
              alt="Sliders Logo"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-extralight text-gray-800 tracking-wide mb-2">
            ABOUT US
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-[#535353] font-sans text-sm md:text-base/7 font-light leading-relaxed">
         A leader in the global real estate market, EMAAR has grown over the years to become the largest real estate developer outside of China. You will be investing with one of the best-regarded brands in the world. With a market cap of AED 114 Bn (FY 2024), a net profit of AED 17.5 Bn (FY 2024), and revenue of AED 35.5 Bn, EMAAR stands as a symbol of stability and excellence. With a presence in 10+ global markets, the brand has delivered over 118,400 residential units worldwide and currently has 50,500 units under development — reinforcing its reputation as a trusted global developer committed to quality and innovation.**
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
