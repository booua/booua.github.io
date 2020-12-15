import React from "react";
import WelcomeSection from "../../components/WelcomeSection";
import RecentProjectsSection from "../../components/RecentProjectsSection/RecentProjectsSection";
import ResumeSection from "../../components/ResumeSection/ResumeSection";
import Background from "../../components/Background/Background";
import { motion } from "framer-motion";
const styles = {
  contentSection: {
    fontFamily: "Montserrat",
    position: "relative",
    zIndex: "100",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    justifyContent: "center",
  },
  root: {
    backgroundColor: "#0e0d0d",
  },
};

function WelcomePage() {
  return (
    <motion.div
      style={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section style={styles.contentSection}>
        <WelcomeSection />
        <Background />
        <RecentProjectsSection />
        <ResumeSection />
      </section>
    </motion.div>
  );
}

export default WelcomePage;
