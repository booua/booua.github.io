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
import {
  handleMouseDown,
  handleMouseEnter,
  handleMouseLeave,
  handleMouseUp,
} from "../Cursor/Cursor";

function VerticalNavbar(props) {
  const [isToggled, toggle] = useToggle(false);

  const styles = {
    navBar: {
      fontFamily: "Montserrat",
      color: "#afafaf",
      padding: "30px 10px 10px 0px",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
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
      cursor: "none",
    },
    logo: {
      alignItems: "right",
      marginRight: "30px",
      color: "#ffffff",
      textDecoration: "none",
      outline: "none",
      cursor: "none",
      width: "100%",
      height: "100%",
      display: "block",
    },
    navContainer: {
      display: "flex",
      justifyContent: "center",
      cursor: "none",
    },
    contactIcon: {
      marginLeft: "30px",
      width: "100%",
      height: "100%",
      display: "block",
      cursor: "none",
    },
    navItem: {
      color: "#ffffff",
      paddingLeft: "30px",
      textDecoration: "none",
      cursor: "none",
      width: "100%",
      height: "100%",
      display: "block",
    },
  };

  return (
    <div className="navBar" style={styles.navBar}>
      <motion.span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
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
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            to="/about"
            className="item"
            style={styles.navItem}
          >
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
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            to="/articles"
            className="item"
            style={styles.navItem}
          >
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
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            to="/projects"
            className="item"
            style={styles.navItem}
          >
            Projects
          </Link>
        </motion.span>
      </div>

      <motion.span
        whileTap={clickAnimation}
        whileHover={logoHoverAnimation}
        variants={menuItemEnterAnimation}
        custom={1}
        animate="visible"
        initial="hidden"
      >
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          to="/"
          className="item"
          style={styles.logo}
        >
          <img
            src="/img/orb.gif"
            alt="orb"
            style={{
              width: "3rem",
              backgroundColor: "#0e0d0d",
              transform: "rotate(90deg)",
            }}
          />
        </Link>
      </motion.span>

      <ContactPane isToggled={isToggled} hide={toggle} />
    </div>
  );
}

export default VerticalNavbar;
