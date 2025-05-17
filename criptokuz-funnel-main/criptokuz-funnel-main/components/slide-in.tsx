"use client"

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
}

const SlideIn = ({ children, ...props }: SlideInProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
