import React from "react";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
function Contact() {
  return (
    <section
      id="contact"
      className="banner container px-3 lg:px-2 mx-auto text-center bg-black md:rounded-xl py-14 md:py-[80px]  mb-14 md:mb-24  2xl:mb-32"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="relative space-y-4">
        {/* LinkedIn icon */}
        <FaLinkedin className="absolute text-white text-[38px] transform rotate-45 left-[7rem] hidden lg:block" />

        {/* Instagram icon */}
        <BsInstagram className="absolute bg-red-500 text-[38px] rounded-md top-[-3rem] left-[18rem] transform rotate-12 text-white hidden lg:block" />

        <h2 className="main_heading text-white">
          Your product or service is not selling?
        </h2>
        <h2 className="main_heading text-white">
          You’re not sure who is your target audience should be?
        </h2>

        {/* Facebook icon */}
        <FaFacebook className="absolute bg-white text-[38px] rounded-md top-[2rem] right-[7rem] transform rotate-12 text-blue-700 hidden lg:block" />

        <p className="text-xl md:text-2xl font-medium mx-auto lg:max-w-4xl text-white">
          Contact CST Social marketing today. We want to see you succeed, tell
          us about your product or services. We will identify your true target
          audience and get your product in front of them.
        </p>
        <div className="flex justify-center md:justify-center pb-[50px] relative ">
          {/* TikTok icon */}
          <FaTiktok className="absolute bg-white text-[40px] top-[2rem] left-[14rem] rounded-full transform rotate-12 hidden lg:block" />

          {/* Call button */}
          <button className="flex items-center btn mt-6 md:mt-4 py-[10px] px-[30px] rounded-md">
            Schedule A Call <FaPhoneAlt />
          </button>

          {/* Twitter icon */}
          <FaTwitter className="absolute text-blue-500 text-[38px] top-[2rem] right-[14rem] transform rotate-12 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
