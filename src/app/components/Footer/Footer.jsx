"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TextScroller from "./TextScroller";
import Link from "next/link";

const Footer = () => {

  return (
    <>
      <main className="bg-[#5b76e2] w-full pb-12 mt-[70px] shadow-lg pt-6">
        <div className="w-full px-8 lg:px-0 lg:w-[90%] mx-auto md:flex justify-between items-center">
          <div>
            <h2 className="poppins-semibold text-4xl text-white ">LOGO</h2>
          </div>

          <div>
            <div className="md:flex mt-3 md:mt-0 text-white">
              <div className="flex items-center md:border-r-2 border-white pr-6 mr-6">
                <FaPhoneAlt />
                <h3 className="poppins-light ml-3 text-md">+1 844 330 3141</h3>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-xl" />
                <h3 className="poppins-light ml-3 text-md">hi@example.io</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center W-[100%] justify-center text-white poppins-medium text-[4rem] lg:text-[100px] text-center overflow-hidden whitespace-nowrap text-transparent border-text w-full py-0 lg:py-2">
         <TextScroller text="Innovate. Create. Succeed: Your Journey Begins Here! Drive Your Business to New Heights!  Join the Revolution in Marketing!"/>
        </div>

    
        <div className="w-full px-8 text-[white] lg:px-0 lg:w-[90%] mx-auto md:flex justify-between items-center">
          <div>
            <h3 className="poppins-light text-[18px] md:text-[14px]">© 2024 Pulse Marketing Inc. All rights reserved.</h3>
          </div>
          <div className="flex md:flex mt-3 md:mt-0">
            <div className="flex items-center md:border-r-2 border-white pr-6 mr-6">
              <h3 className="poppins-light text-[18px] md:text-[14px]">Privacy Policy</h3>
            </div>
            <div className="flex items-center">
              <h3 className="poppins-light text-[18px] md:text-[14px]">Terms & Conditions</h3>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px #ffffff; 
          text-stroke: 2px black; 
        }
      `}</style>
    </>
  );
};

export default Footer;