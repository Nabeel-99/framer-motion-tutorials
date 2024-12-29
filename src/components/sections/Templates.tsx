import { useRef } from "react";
import { FaStarHalf } from "react-icons/fa";
import Contextual from "../../assets/images/contextual.png";
import Verified from "../../assets/images/verified.png";
import Template from "../../assets/images/template.png";
import { motion } from "framer-motion";

const Templates = () => {
  const betaRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-20 pb-8 hidden lg:inline">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex gap-1 text-2xl text-purple-400">
          <FaStarHalf />
          Templates
        </div>
        <p className="font-serif pb-10 font-extrabold lg:text-4xl xl:text-[4rem] xl:leading-[4rem] tracking-tight">
          Start closer to the finish line with{" "}
          <span className="lg:block">
            templates made by industry{" "}
            <span className="lg:block xl:inline">experts</span>{" "}
          </span>
        </p>
        <div className="grid grid-cols-3 gap-6 xl:px-24 lg:px-6">
          <div className=" bg-[#101010]  p-10 rounded-2xl  flex flex-col items-center gap-3">
            <div className="">
              <img src={Verified} alt="" className="xl:w-32 lg:w-24" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="lg:text-xl xl:text-2xl font-bold">
                Verified by experts
              </p>
              <p>
                Templates created by the leading experts to help you deliver a
                powerful story
              </p>
            </div>
          </div>
          <div className=" bg-[#101010]  p-10 rounded-2xl  flex flex-col items-center gap-3">
            <div className="">
              <img src={Contextual} alt="" className="w-32 lg:w-24" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="lg:text-xl xl:text-2xl font-bold">
                Contextual guidance
              </p>
              <p>
                Best practice guidance is baked into the template - without
                leaving chronicle
              </p>
            </div>
          </div>
          <div className=" bg-[#101010]  p-10 rounded-2xl  flex flex-col items-center gap-3">
            <div className="">
              <img src={Template} alt="" className="w-32 lg:w-24" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="lg:text-xl xl:text-2xl font-bold">
                Templates for everything
              </p>
              <p>
                Whether it's all hands or pitch decks, start closer to the
                finish line with a template
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              Pitch decks
            </div>
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              All hands
            </div>
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              Investor update
            </div>
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              Product roadmap
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 px-10 pb-60 ">
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              Research findings
            </div>
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              Marketing strategy
            </div>
            <div className="flex items-center justify-center bg-[#191919] gap-1 shadow-md rounded-xl px-4 py-2">
              <FaStarHalf className="text-purple-400" />
              North star goals
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex w-full">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              ref={betaRef}
              // style={{translateX: translateXBeta}}
              initial={{ translateX: 0 }}
              animate={{ translateX: "-100%" }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              className="flex flex-shrink-0 gap-10 items-center hover:text-purple-500 cursor-pointer"
            >
              <FaStarHalf className="text-4xl text-purple-300" />
              <p className="lg:text-[6rem] xl:text-[9.6rem] font-bold pr-20 tracking-tight labil-grotesk">
                Join our beta
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
