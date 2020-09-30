import React from 'react'
import VerticalNavbar from "../../components/VerticalNavbar";
import Footer from "../../components/Footer";
import WelcomeSection from "../../components/WelcomeSection";
import RecentProjectsSection from "../../components/RecentProjectsSection/RecentProjectsSection";
import ResumeSection from "../../components/ResumeSection/ResumeSection";
import Background from '../../components/Background/Background';

const styles = {
  contentSection: {
    fontFamily: "Montserrat, Work Sans, sans-serif",
    position:"relative",
    zIndex:"100",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    justifyContent: "center",
  },
  root: {
    backgroundColor:"#0e0d0d"
  },
};

function WelcomePage(props) {
  return (
    <div style={styles.root}>
      <section style={styles.contentSection}>
        <VerticalNavbar />
        <WelcomeSection />
        <RecentProjectsSection/>
        <ResumeSection/>
        <Footer/>
      </section>
      <Background/>
    </div>
     
  );
}

export default WelcomePage;
