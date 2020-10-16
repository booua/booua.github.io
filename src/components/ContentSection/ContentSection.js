import React from "react";
import { motion } from "framer-motion";

function ContentSection(props) {
  const styles = {
    contentSection: {
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      minHeight: "100vh",
      width: "100%",
      justifyContent: "center",
      color: "white",
    },
  };

  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  return (
    <motion.section
      key={props.id}
      style={props.style === undefined ? styles.contentSection: props.style}
      animate={{ opacity: 1, scale: 0.95, transition}}
      initial={{ opacity: 0, scale: 1 }}
      // exit={{opacity: 0, scale: 0.5, transition}}
    >
      {props.children}
    </motion.section>
  );
}

export default ContentSection;
