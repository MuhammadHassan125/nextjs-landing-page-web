

import { Reveal } from "@/app/utils/Reveal";
import Image from "next/image";
import React from "react";
import { MdArrowForward } from "react-icons/md";
const HeroSection = () => {
  return (
    <>
      <main className=" w-full lg:h-[90vh] flex flex-col lg:flex-row justify-between bg-custom-bg bg-cover">
        <div className="my-container flex flex-col lg:flex-row lg:justify-between lg:w-[1200px] lg:mx-auto">

        <div className="w-[90%] mx-auto md:mx-0 lg:w-[40%] flex flex-col justify-center -translate-y-10">
          <div>
            <Reveal>
            <h1 className="text-[1.8em] md:text-[60px] lg:text-[50px]  mt-8 lg:mt-2 poppins-medium leading-[49px] md:leading-[1.3em]">
              Our Objective
              <br /> Increase Your Revenue.
            </h1>
            </Reveal>

            <div className="w-[90%] border-l-2 border-[#26097f] my-4 pl-3">
              <Reveal>
              <p className="poppins-light">
                Boost your brand with our expert websites, . Bring your vision to life with Pulse.
              </p>
              </Reveal>
            </div>
          </div>

          {/* Contact Us button  */}

          <button className="w-[35%] bg-[#26097f] hidden border border-main shadow-lg hover:bg-my-blue-gradient hover:text-white hover:transition-all ease-in-out poppins-regular text-white py-2 px-4 mt-8 lg:mt-0 rounded-3xl md:flex justify-between items-center border-none outline-none contact-btn">
            Contact Us
            <div className="bg-[#6EE3D7] p-[4px] ml-2 h-full rounded-full">
              <MdArrowForward />
            </div>
          </button>
        </div>

        <div className="w-[100%] lg:w-[48%] -translate-y-5 flex flex-col justify-center items-end ">
          <Image
            src={"/bg (2).png"}
            alt={"hero image"}
            width={1200}
            height={1200}
          />
        </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;