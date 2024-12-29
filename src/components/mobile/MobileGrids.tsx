import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import blockRoadmap from "../../assets/images/block-roadmap.png";
import blockJessica from "../../assets/images/block-jessica.png";
import blockRanking from "../../assets/images/block-ranking.png";
import blockTimeline from "../../assets/images/block-timeline.png";
import blockStats from "../../assets/images/block-stats.png";
import blockPoll from "../../assets/images/block-poll.png";
import blockTickets from "../../assets/images/block-tickets.png";
import { FaStarHalf } from "react-icons/fa";

const MobileGrids = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardScrollYProgress } = useScroll({
    target: cardRef,
    offset: ["center end", "end start"],
  });
  const translateCard = useTransform(
    cardScrollYProgress,
    [0, 1],
    ["60%", "0%"]
  );

  return (
    <section className="pt-10 pb-8 md:hidden w-full  relative " ref={cardRef}>
      <div className="grid grid-cols-2 gap-4 px-6 w-full">
        <div className="flex flex-col gap-4">
          <img src={blockTimeline} alt="" />
          <img src={blockTickets} alt="" />
          <img src={blockRanking} alt="" />
          <img src={blockJessica} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <img src={blockRoadmap} alt="" />
          <img src={blockPoll} alt="" />
          <img src={blockStats} alt="" />
          <img src={blockTimeline} alt="" />
        </div>
      </div>
      <div className="absolute top-0 h-full inset-0 bg-black opacity-50"></div>
      <motion.div
        style={{ top: translateCard }}
        transition={{ duration: 800 }}
        className="absolute  left-0 right-0  flex items-center justify-center"
      >
        <div className="flex  flex-col p-8 items-center justify-center sm:w-[30rem] sm:p-10   rounded-2xl shadow-md bg-[#181818]">
          <div className="flex items-center justify-center gap-1 text-lg sm:text-xl">
            <FaStarHalf className="text-purple-500" />
            <p className="font-bold text-purple-500">Introducing Blocks</p>
          </div>
          <p className="pl-4 text-center text-[2.5rem] sm:text-[3rem] leading-tight font-extrabold tracking-tight font-serif">
            A new way<span className="block">to create.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MobileGrids;
