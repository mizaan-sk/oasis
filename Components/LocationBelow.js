import Image from "next/image";
import React from "react";

const LocationBelow = () => {
  return (
    <>
      <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/oas_bg4.webp"
          alt="Luxury Pool View"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/70 md:-mt-17  flex flex-col items-center justify-center px-4 text-center z-0">
          <div className="flex flex-col items-center justify-center md:mb-0 mb-14">
            <Image
              src="/assets/Banner_Logo.webp"
              alt="Logo"
              width={150}
              height={100}
              className="md:-mb-39 -mb-30 md:w-49 w-35 opacity-40"
            />
            {/* <h1 className='uppercase z-10 text-white text-2xl md:text-4xl tracking-[10px]'>Dream,</h1> */}
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase mt-5 md:mt-3 z-10 font-normal ">
              DREAM,MARVEL,EXPLORE.
            </h1>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationBelow;
