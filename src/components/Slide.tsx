import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: string;
}

const Slide = ({ children, className, delay, type }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        duration: 1,
        damping: 8,
        delay: delay,
        stiffness: 100,
        type: type,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
