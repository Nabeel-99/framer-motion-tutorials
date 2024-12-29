import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStarHalf } from "react-icons/fa";
import blockStats from "../../assets/images/block-stats.png";
import blockTickets from "../../assets/images/block-tickets.png";
import { AnimatePresence, motion } from "framer-motion";

const StickySection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 400 : -400,
        opacity: 0.5,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 400 : -400,
        opacity: 0.5,
      };
    },
  };
  const cards = [
    {
      title: "CUSTOMISE",
      heading: "Easy to customise.\n Hard to get wrong.",
      description:
        "Blocks are responsive and designed to be customised easily. No matter how you edit, they will always look stunning.",
    },
    {
      title: "ANOTHER CARD",
      heading: "Another heading",
      description: "Another description.",
    },
    {
      title: "YET ANOTHER CARD",
      heading: "Yet another heading",
      description: "Yet another description.",
    },
  ];

  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === cards.length - 1;
  const card = cards[currentCardIndex];

  const showNextCard = () => {
    setDirection(1);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const showPreviousCard = () => {
    setDirection(-1);
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <section className="lg:pt-32 pb-20 sm:px-20 xl:px-0">
      <div className="lg:flex gap-10 xl:justify-around  px-4 xl:px-44  w-full">
        <div className="lg:sticky lg:top-[30rem] xl:top-52  h-full flex flex-col gap-6 text-left">
          <div className="flex gap-1 items-center text-left text-lg text-purple-500">
            <FaStarHalf /> Workflow
          </div>
          <p className="font-bold xl:text-[5.5rem] text-[3.3rem] labil-grotesk xl:leading-[5.5rem] leading-[3.4rem] tracking-tight">
            Create at <span className="block">the speed</span>
            <span className="block">of thought.</span>
          </p>
          <p className="text-[#595959]">
            Focus on your getting your thoughts out and crafting the best{" "}
            <span className="xl:block">
              message while chronicle does the heavy lifiting for you
            </span>
          </p>
        </div>
        <div className="hidden lg:flex flex-col lg:gap-56 xl:gap-20">
          {[...Array(3)].map((_, index) => (
            <div
              className=" shadow-lg rounded-xl lg:h-[31rem] xl:h-[38rem] lg:w-[26rem] xl:w-full  bg-[#101010] flex xl:p-8 justify-center hover:drop-shadow-xl hover:shadow-green-900 transition-all ease-in-out duration-700"
              key={index}
            >
              <div className="flex flex-col gap-8">
                <div className="flex xl:h-72">
                  <img
                    src={blockTickets}
                    className="xl:w-60 lg:w-44 relative  object-contain mt-20"
                    alt=""
                  />
                  <img
                    src={blockStats}
                    className="xl:w-72 lg:w-44 relative xl:right-16 object-contain z-10"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-md text-purple-400">CUSTOMISE</p>
                  <p className="font-bold tracking-tight leading-tight  text-[2.2rem]">
                    Easy to customise.{" "}
                    <span className="block">Hard to get wrong.</span>
                  </p>
                  <p className="text-[#676768]">
                    Blocks are responsive and designed to be{" "}
                    <span className="block">
                      customised easily. No matter how you edit.{" "}
                      <span className="block">
                        they will always look stunning
                      </span>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentCardIndex}
            initial="enter"
            animate="center"
            custom={direction}
            variants={variants}
            transition={{ duration: 0 }}
            className="lg:hidden shadow-lg rounded-xl mt-10 h-[35rem]  scale-100 hover:scale-105 bg-[#101010] flex p-8 justify-center hover:drop-shadow-xl hover:shadow-green-900 transition-all ease-in-out duration-700"
          >
            <div className="flex flex-col gap-8">
              <div className="flex h-72 overflow-hidden">
                <img
                  src={blockTickets}
                  className="lg:w-60 w-48 relative  object-contain mt-20"
                  alt=""
                />
                <img
                  src={blockStats}
                  className="lg:w-72 w-48 relative right-16 object-contain z-10"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 lg:text-left">
                <p className="font-bold text-md text-purple-400">
                  {card.title}
                </p>
                <p className="font-bold tracking-tight leading-tight text-2xl xl:text-[2.2rem]">
                  Easy to customize.
                  <span className="block">Hard to get wrong.</span>
                </p>
                <p className="text-[#676768]">{card.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
          <button
            disabled={isFirstCard}
            onClick={showPreviousCard}
            title="left "
            className={`flex items-center justify-center rounded-full w-full py-4 ${
              isFirstCard ? "bg-[#101010] text-gray-500" : "bg-white text-black"
            }`}
          >
            <FaArrowLeft />
          </button>
          <button
            disabled={isLastCard}
            onClick={showNextCard}
            title="right "
            className={`flex items-center justify-center rounded-full w-full py-3 ${
              isLastCard ? "bg-[#101010] text-gray-500" : "bg-white text-black"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StickySection;
