import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
interface ParagraphProps {
  value: string;
}
interface WordProps {
  children: any;
  range: any;
  progress: any;
}
const Paragraph: React.FC<ParagraphProps> = ({ value }) => {
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = value.split(" ");
  return (
    <p
      ref={element}
      className="h-screen  text-left leading-normal font-serif text-4xl  max-w-[1280px] p-[40px]"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        console.log([start, end]);
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default Paragraph;

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="inline-block mr-[12px] relative">
      <span className="absolute opacity-15">{children}</span>
      <motion.span
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
