import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = (props) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
        {props.children}
    </motion.section>
  );
};

export default AnimatedSection;
