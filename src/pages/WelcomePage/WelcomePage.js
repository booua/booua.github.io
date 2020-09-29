import React from "react"
import VerticalNavbar from "../../components/VerticalNavbar";
import Footer from "../../components/Footer";
import WelcomeSection from "../../components/WelcomeSection";
import RecentProjectsSection from "../../components/RecentProjectsSection/RecentProjectsSection";
import ResumeSection from "../../components/ResumeSection/ResumeSection";

const styles = ({
    root: {

      backgroundColor: "#0e0d0d",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      minHeight: "100vh",
      width: "100%",
      justifyContent: "center"
    }
  });

function WelcomePage (props) {
        return (
            <div style={styles.root}>
                <VerticalNavbar />
                <WelcomeSection/>
                {/* <RecentProjectsSection/> */}
                {/* <ResumeSection/> */}
                {/* <Footer/> */}
            </div>
        )
}

export default WelcomePage;