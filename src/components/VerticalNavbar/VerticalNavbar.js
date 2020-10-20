import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToggle } from "../../tools/CustomHooks";
import {
  hoverAnimation,
  clickAnimation,
  logoHoverAnimation,
  menuItemEnterAnimation,
} from "../../tools/AnimationTypes";
import ContactPane from "../ContactPane/ContactPane";

function VerticalNavbar(props) {
  const [isToggled, toggle] = useToggle(false);

  const styles = {
    navBar: {
      fontFamily: "Montserrat",
      color: "#afafaf",
      padding: "30px 10px 10px 0px",
      display: "flex",
      flex: "1 0 auto",
      backgroundColor: "transparent",
      width: "100vh",
      height: "2rem",
      transformOrigin: "top left",
      position: "fixed",
      left: "0",
      top: "100%",
      transform: "rotate(-90deg)",
      zIndex: "9999",
      outline: "none",
    },
    logo: {
      display: "flex",
      flexDirection: "row",
      flex: "1 0 auto",
      justifyContent: "right",
      alignItems: "right",
      marginRight: "30px",
      color: "#ffffff",
      textDecoration: "none",
      outline: "none",
    },
    navContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flex: "5 0 auto",
    },
    contactIcon: {
      display: "flex",
      flexDirection: "row",
      flex: "1 0 auto",
      marginLeft: "30px",
    },
    navItem: {
      color: "#ffffff",
      paddingLeft: "30px",
      textDecoration: "none",
    },
  };

  return (
    <div className="navBar" style={styles.navBar}>
      <motion.span
        whileTap={clickAnimation}
        whileHover={hoverAnimation}
        style={styles.contactIcon}
        onClick={toggle}
        variants={menuItemEnterAnimation}
        custom={5}
        animate="visible"
        initial="hidden"
      >
        contact
      </motion.span>
      <div style={styles.navContainer}>
        <motion.span
          whileTap={clickAnimation}
          whileHover={hoverAnimation}
          variants={menuItemEnterAnimation}
          custom={4}
          animate="visible"
          initial="hidden"
        >
          <Link to="/about" className="item" style={styles.navItem}>
            About
          </Link>
        </motion.span>
        <motion.span
          whileTap={clickAnimation}
          whileHover={hoverAnimation}
          variants={menuItemEnterAnimation}
          custom={3}
          animate="visible"
          initial="hidden"
        >
          <Link to="/articles" className="item" style={styles.navItem}>
            Articles
          </Link>
        </motion.span>
        <motion.span
          whileTap={clickAnimation}
          whileHover={hoverAnimation}
          variants={menuItemEnterAnimation}
          custom={2}
          animate="visible"
          initial="hidden"
        >
          <Link to="/projects" className="item" style={styles.navItem}>
            Projects
          </Link>
        </motion.span>
      </div>
      <Link to="/" className="item" style={styles.logo}>
        <motion.span
          whileTap={clickAnimation}
          whileHover={logoHoverAnimation}
          variants={menuItemEnterAnimation}
          custom={1}
          animate="visible"
          initial="hidden"
        >
          <img
            src="/orb.gif"
            alt="orb"
            style={{
              width: "3rem",
              backgroundColor: "#0e0d0d",
              transform: "rotate(90deg)",
            }}
          />
        </motion.span>
      </Link>
      <ContactPane isToggled={isToggled} hide={toggle} />
    </div>
  );
}

export default VerticalNavbar;
