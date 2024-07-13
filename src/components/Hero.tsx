import React, { useEffect, useRef, useState } from "react";
import heroImage from "../assets/images/hero.png";
import IpadScreen from "../assets/images/Group 16.png";
import {
  AnimatePresence,
  easeIn,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFigma,
  FaInstagram,
  FaLaptop,
  FaMobile,
  FaSpotify,
  FaStarHalf,
  FaTiktok,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import blockPoll from "../assets/images/block-poll.png";
import blockTickets from "../assets/images/block-tickets.png";
import blockRoadmap from "../assets/images/block-roadmap.png";
import blockRanking from "../assets/images/block-ranking.png";
import blockTimeline from "../assets/images/block-timeline.png";
import blockStats from "../assets/images/block-stats.png";
import blockJessica from "../assets/images/block-jessica.png";
import Phone1 from "../assets/images/phone1.webp";
import Phone2 from "../assets/images/phone2.webp";
import Ipad from "../assets/images/ipad.png";
import { IoLaptopOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone, MdVerified } from "react-icons/md";
import Verified from "../assets/images/verified.png";
import Template from "../assets/images/template.png";
import Contextual from "../assets/images/contextual.png";
import TypewriterText from "./TypewriterText";
import ParallaxAnimation from "./ParallaxAnimation";
import Slide from "./Slide";
import heroImageM from "../assets/images/hero-m.png";
// import MobileHero from "./mobile/MobileHero.tsx";
// import GridsHero from "./mobile/GridsHero.tsx";
import Cards from "./Cards.tsx";
import MobileHero from "./mobile/MobileHero.tsx";
import MobileGrids from "./mobile/MobileGrids.tsx";
import Templates from "./sections/Templates.tsx";

const Hero = () => {
  const [showIphone, setShowIphone] = useState<boolean>(true);
  const [showIpad, setShowIpad] = useState<boolean>(false);
  // ref
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);
  const betaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const { scrollYProgress: gridScrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: betSacrollYProgress } = useScroll({
    target: betaRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: section4ScrollYProgress } = useScroll({
    target: sectionRef4,
    offset: ["start end", "end start"],
  });

  const words =
    "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.".split(
      " "
    );

  // Create an array of transforms for each word
  const wordTransforms = words.map((_, index) => {
    return useTransform(
      section4ScrollYProgress,
      [index / words.length, (index + 1) / words.length],
      ["#242424", "#ffffff"]
    );
  });

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
  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === cards.length - 1;
  const card = cards[currentCardIndex];

  const translateY1 = useTransform(gridScrollYProgress, [0, 1], [0, -90]);
  const translateY2 = useTransform(gridScrollYProgress, [0, 1], [0, -80]);
  const translateY3 = useTransform(gridScrollYProgress, [0, 1], [-20, 100]);
  const translateY4 = useTransform(gridScrollYProgress, [0, 1], [0, 20]);
  const translateY5 = useTransform(gridScrollYProgress, [0, 1], [0, -10]);
  const translateY6 = useTransform(gridScrollYProgress, [0, 1], [0, 60]);

  // for grid 1 image 1
  const scale1 = useTransform(gridScrollYProgress, [0, 1], [0.8, 1]);
  const opacity1 = useTransform(gridScrollYProgress, [0, 1], [0.6, 1]);
  const translateX1 = useTransform(gridScrollYProgress, [0, 1], [-10, 0]);

  // for grid 5 image 1
  const scale5 = useTransform(gridScrollYProgress, [0, 1], [0.7, 1]);
  const opacity5 = useTransform(gridScrollYProgress, [0, 1], [0.4, 1]);

  // for grid 6 image2
  const opacity6 = useTransform(gridScrollYProgress, [0, 1], [0.5, 1]);
  const translateX6 = useTransform(gridScrollYProgress, [0, 1], [100, 40]);
  const scale6 = useTransform(gridScrollYProgress, [0, 1], [0.7, 1]);

  const translateXBeta = useTransform(betSacrollYProgress, [0, 1], [-100, 100]);

  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, (value) => {
    if (sectionRef.current) {
      // get the section Height
      const sectionHeight = sectionRef.current.clientHeight;
      // get the scrolling Position
      const scrollingPositon = value / sectionHeight;
      // return the value
      return Math.min(Math.max(scrollingPositon, 0), 1);
    }
    return 0; //ALWAYS RETURN A NUMBER
  });

  const rotateX = useTransform(scrollProgress, [0, 1], [0, -100]);
  const displayIphones = () => {
    setShowIphone(true);
    setShowIpad(false);
  };
  const displayIpad = () => {
    setShowIpad(true);
    setShowIphone(false);
  };

  return (
    <div className="w-full flex flex-col ">
      <motion.section
        ref={sectionRef}
        initial={{ perspective: "1000px" }}
        transition={{ duration: 30, ease: "easeInOut" }}
        className="w-full hidden lg:flex  justify-center overflow-hidden  bg-img"
      >
        <motion.div
          style={{ rotateX }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className=" hidden lg:visible xl:w-[80%] xl:h-[80%] lg:px-6 xl:px-0  mt-8 md:flex justify-center relative"
        >
          <motion.img
            src={heroImage}
            alt="hero"
            className="xl:h-full lg:h-[35rem] lg:w-full xl:w-full xl:object-fill lg:object-fill"
          />
          <div className="absolute flex gap- w-full  h-[34rem]">
            <div className="flex flex-col absolute top-32 left-24">
              <TypewriterText text={`Impactful\nstories. Made\neffortlessly`} />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="text-left cursor-pointer pt-4 text-[#717171]"
              >
                <p>Chronicle is a modern format of presentations.</p>
                <p>Deliver impressive, interactive stories without</p>
                <p>the design guesswork!</p>
              </motion.div>
            </div>
            <div className="absolute flex  gap-10 top-10 right-24">
              <div className="flex flex-col gap-10">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  src={blockTickets}
                  alt=""
                  className="xl:w-72 lg:w-60 xl:mt-20 lg:mt-16"
                />
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  src={blockJessica}
                  alt=""
                  className="w-44"
                />
              </div>
              <div className="flex flex-col gap-10">
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  src={blockRanking}
                  alt=""
                  className="xl:w-44 lg:w-40 pt-2"
                />
                <motion.img
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  src={blockPoll}
                  alt=""
                  className="xl:w-44 lg:w-40 relative right-10"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      {/* Mobile hero Layout */}
      <MobileHero />
      {/*  */}

      <motion.section className="pb-8 pt-8 sm:px-20 xl:px-0">
        <div className="flex flex-col gap-10  xl:px-40">
          <h2 className="lg:text-[3.5rem] text-3xl tracking-tight">
            Featured and seen in
          </h2>
          <div className="grid grid-flow-cols w-full px-4 lg:flex  lg:justify-center gap-7 border-b border-b-gray-500 pb-24">
            <Link
              to={"/"}
              className="shadow-md bg-[#242526]  hover:bg-black rounded-lg py-3 lg:py-2 lg:px-3 lg:text-sm xl:text-xl px-5   lg:flex items-center justify-center text-xl"
            >
              TechCrunch
            </Link>
            <Link
              to={"/"}
              className="shadow-md bg-[#242526] hover:bg-black  rounded-lg py-3 lg:py-2 lg:px-3 lg:text-sm xl:text-xl  px-5  lg:flex items-center justify-center text-xl"
            >
              Forbes
            </Link>
            <Link
              to={"/"}
              className="shadow-md bg-[#242526] hover:bg-black  rounded-lg py-3 lg:py-2 lg:px-3 lg:text-sm xl:text-xl px-5  lg:flex items-center justify-center text-xl"
            >
              BUSINESS INSIDER
            </Link>
            <Link
              to={"/"}
              className="shadow-md bg-[#242526] hover:bg-black  rounded-lg py-3 lg:py-2 lg:px-3 lg:text-sm xl:text-xl  px-5  lg:flex items-center justify-center text-xl"
            >
              On Deck
            </Link>
            <Link
              to={"/"}
              className="shadow-md bg-[#242526] hover:bg-black  rounded-lg py-3 lg:py-2 lg:px-3 lg:text-sm xl:text-xl px-5  tracking-tighter lg:flex items-center text-xl justify-center"
            >
              THE WALL STREET JOURNAL
            </Link>
            <Link
              to={"/"}
              className="shadow-md bg-[#242526] hover:bg-black  rounded-lg py-3 lg:py-2 lg:px-3 lg:text-sm xl:text-xl  lg:flex px-2 items-center justify-center text-xl"
            >
              CNBC
            </Link>
          </div>
        </div>
      </motion.section>
      <section className=" md:pt-10 xl:pt-44  pb-8 overflow-hidden  hidden md:inline">
        <div className="relative flex flex-col sm:px-20  items-start xl:px-60 ">
          <div className="flex items-center gap-2 text-xl">
            <FaStarHalf className="text-purple-500" />
            <p className="font-bold text-purple-500">Introducing Blocks</p>
          </div>
          <p className="pl-4 text-left md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] leading-tight font-extrabold tracking-tight font-serif">
            A new, easy <span className="block"> way to create.</span>
          </p>
        </div>
        <div ref={gridRef} className="grid grid-flow-col gap-4 w-full">
          <ParallaxAnimation translateY={translateY1}>
            <div className="flex flex-col gap-4 xl:-mt-32 md:mt-32 -translate-x-10 md:w-44 lg:w-56 xl:w-60  h-3">
              <motion.img
                style={{
                  scale: scale1,
                  opacity: opacity1,
                  translateX: translateX1,
                }}
                transition={{ duration: 1 }}
                src={blockPoll}
                alt=""
                className=""
              />
              <img src={blockJessica} alt="" className="" />
            </div>
          </ParallaxAnimation>
          <ParallaxAnimation translateY={translateY2}>
            <div className="mt-24 xl:w-72 xl:-translate-x-5 md:w-44 lg:w-56  ">
              <img src={blockRanking} alt="" className="" />
            </div>
          </ParallaxAnimation>
          <ParallaxAnimation translateY={translateY3}>
            <div className="flex flex-col gap-4 xl:mt-44 md:-mt-44 md:w-44 lg:w-56">
              <img src={blockRoadmap} alt="" />
              <img src={blockStats} alt="" />
            </div>
          </ParallaxAnimation>
          <ParallaxAnimation translateY={translateY4}>
            <div className="flex flex-col gap-4 xl:translate-x-2 md:w-44 lg:w-56">
              <img src={blockTimeline} alt="" />
              <img src={blockTickets} alt="" />
            </div>
          </ParallaxAnimation>
          <ParallaxAnimation translateY={translateY5}>
            <div className="flex flex-col xl:-mt-44 gap-4 xl:translate-x-5 md:w-44 lg:w-56">
              <motion.img
                style={{ scale: scale5, opacity: opacity5 }}
                src={blockPoll}
                alt=""
                className=""
                transition={{ duration: 30, ease: "easeInOut" }}
              />
              <img src={blockJessica} alt="" />
              <img src={blockRoadmap} alt="" />
            </div>
          </ParallaxAnimation>
          <ParallaxAnimation translateY={translateY6}>
            <div className="flex flex-col gap-4 md:w-44 lg:w-56">
              <img src={blockTickets} alt="" className="xl:translate-x-10" />
              <motion.img
                style={{
                  opacity: opacity6,
                  translateX: translateX6,
                  scale: scale6,
                }}
                transition={{ duration: 30 }}
                src={blockStats}
                alt=""
                // className='translate-x-10'
              />
            </div>
          </ParallaxAnimation>
        </div>
      </section>
      {/* Mobile Grids Layout  */}
      <MobileGrids />
      {/*  */}
      <section
        className="pt-60 pb-20 sm:px-20 xl:px-0 flex justify-center"
        ref={sectionRef4}
      >
        <div className="max-w-[60rem] sticky top-0">
          <p className="lg:text-[3rem] text-[2.4rem] text-left px-4 font-bold tracking-tighter leading-tight">
            {words.map((word, index) =>
              word === "\n" ? (
                <br key={index} />
              ) : (
                <motion.span
                  key={index}
                  style={{ color: wordTransforms[index] }}
                >
                  {word}{" "}
                </motion.span>
              )
            )}
          </p>
        </div>
      </section>

      <Cards />

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
                    <p className="font-bold text-md text-purple-400">
                      CUSTOMISE
                    </p>
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
                isFirstCard
                  ? "bg-[#101010] text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <FaArrowLeft />
            </button>
            <button
              disabled={isLastCard}
              onClick={showNextCard}
              title="right "
              className={`flex items-center justify-center rounded-full w-full py-3 ${
                isLastCard
                  ? "bg-[#101010] text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="lg:pt-32 pb-8 sm:px-20 lg:px-6 xl:px-0">
        <div className="flex flex-col items-center text-left lg:text-center gap-10 px-4  ">
          <div className="flex gap-1  border-t border-t-[#242424] pt-32 w-full xl:w-3/4 items-center lg:justify-center text-xl text-purple-400">
            <FaStarHalf />
            Team collaboration
          </div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold tracking-tight text-left lg:text-center w-full labil-grotesk lg:text-2xl xl:text-[2.8rem] lg:text-[3.5rem]"
          >
            Rediscover <span className="block md:inline">the joy in</span>{" "}
            storytelling.
          </motion.p>
          <div className="grid grid-flow-cols lg:grid-cols-3 gap-8 w-full xl:px-20">
            {[...Array(3)].map((_, index) => (
              <div
                className="flex flex-col xl:h-[28rem] xl:gap-20   shadow-lg rounded-xl bg-[#101010] p-8 hover:drop-shadow-xl hover:shadow-cyan-900 transition-all ease-in-out duration-700 scale-100 hover:scale-105"
                key={index}
              >
                <div className="h-44 flex flex-col items-center justify-center">
                  <p className="font-bold lg:text-4xl xl:text-[3rem] xl:leading-[3rem]  tracking-tight labil grotesk text-[#242424]">
                    This year has{" "}
                    <span className="block">
                      been <span className="text-purple-500">massive</span>
                    </span>
                    <span className="block">for us!</span>
                  </p>
                </div>
                <div className="flex flex-col text-center  items-center ">
                  <p className="font-bold text-2xl">Never lose attention.</p>
                  <p>
                    Engage your audience with fun reactions and interactive
                    effeects
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-20 pb-10 px-8 hidden lg:inline ">
        <div className="bg-[#101010] shadow-lg  overflow-hidden py-24 rounded-xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col text-left gap-4 pl-20">
              <div className="flex gap-1 items-center text-xl text-purple-400">
                <FaStarHalf />
                Mobile experience
              </div>
              <p className="text-[4.5rem] font-serif  font-extrabold leading-[4.5rem]">
                Present <span className="block">anywhere.</span>
                <span className="block">Anytime.</span>
              </p>
              <p className="text-xl text-gray-500">
                Transform your stories into a bite sized{" "}
                <span className="block">
                  format tailored for mobile. Quickly browse
                </span>{" "}
                the summary and dive deeper when{" "}
                <span className="block">needed.</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex rounded-xl">
                <button
                  onClick={displayIphones}
                  title="phone"
                  className={`border bg-[#242424]  px-2 py-2 rounded-l-xl ${
                    showIphone ? "bg-yellow-500 text-black" : ""
                  }`}
                >
                  <MdOutlinePhoneIphone className="text-3xl" />
                </button>
                <button
                  onClick={displayIpad}
                  title="laptop"
                  className={`border bg-[#242424] px-2 py-2 rounded-r-xl ${
                    showIpad ? "bg-yellow-500 text-black" : ""
                  }`}
                >
                  <IoLaptopOutline className="text-3xl" />
                </button>
              </div>
              <div className="flex  w-[50rem]  ">
                {showIpad ? (
                  <img
                    src={Ipad}
                    alt=""
                    className="w-full  h-[36rem] transition-all duration-700 delay-300 ease-in-out"
                  />
                ) : (
                  <>
                    <img
                      src={Phone1}
                      alt=""
                      className="w-64 h-[33rem] shadow-xl -rotate-12 relative left-20 mt-12 transition-all duration-700 delay-300 ease-in-out "
                    />
                    <img
                      src={Phone2}
                      alt=""
                      className="w-72  h-[36rem] shadow-xl z-10 transition-transform  "
                    />
                    <img
                      src={Phone1}
                      alt=""
                      className="w-64  h-[33rem] shadow-xl rotate-12 relative right-20 mt-12 transition-all duration-700 delay-300 ease-in-out"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <Templates />
      <section className="pt-20 pb-8 lg:hidden px-4">
        <div className="sm:mx-20">
          <div className="  p-10 rounded-2xl  flex flex-col items-center gap-3 ">
            <div className="">
              <img src={Verified} alt="" className="w-20" />
            </div>
            <div className="flex flex-col gap-4 pb-8">
              <p className="text-2xl font-bold">Verified by experts</p>
              <p>
                Templates created by the leading experts to help you deliver a
                powerful story
              </p>
            </div>
            <div className="">
              <img src={Contextual} alt="" className="w-20" />
            </div>
            <div className="flex flex-col gap-4 pb-8">
              <p className="text-2xl font-bold">Contextual guidance</p>
              <p>
                Best practice guidance is baked into the template - without
                leaving chronicle
              </p>
            </div>
            <div className="">
              <img src={Template} alt="" className="w-20" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Templates for everything</p>
              <p>
                Whether it's all hands or pitch decks, start closer to the
                finish line with a template
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex w-full py-10">
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
              <p className="text-[3.6rem] font-bold pr-20 tracking-tight labil-grotesk">
                Join our beta
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
