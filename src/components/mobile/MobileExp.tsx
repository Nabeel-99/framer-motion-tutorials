import React from "react";
import { FaStarHalf } from "react-icons/fa";
import Ipad from "../../assets/images/ipad.png";
import Phone1 from "../../assets/images/phone1.webp";

const MobileExp = () => {
  return (
    <section className="pt-20 pb-8 sm:px-20 xl:px-0 lg:hidden overflow-x-hidden">
      <div className="flex flex-col text-left gap-4 px-4">
        <div className="flex gap-1 items-center  text-xl text-purple-400">
          <FaStarHalf />
          Mobile experience
        </div>
        <p className="text-[3.5rem] font-serif  font-extrabold leading-[4.5rem]">
          Present <span className="block">anywhere.</span>
          <span className="block">Anytime.</span>
        </p>
        <p className="text-lg text-gray-500">
          Transform your stories into a bite sized{" "}
          <span className="xl:block">
            format tailored for mobile. Quickly browse
          </span>{" "}
          the summary and dive deeper when{" "}
          <span className="xl:block">needed.</span>
        </p>
        <div className="flex relative ">
          <img src={Ipad} alt="" className="w-full mt-8" />
          <img
            src={Phone1}
            alt=""
            className="absolute mt-8 w-40 md:w-60 right-0 rotate-12 -top-10 translate-x-7 md:translate-x-36 object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileExp;
