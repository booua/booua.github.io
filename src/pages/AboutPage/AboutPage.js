import React from "react"
import ContentSection from "../../components/ContentSection/ContentSection";
import VerticalNavbar from "../../components/VerticalNavbar";
import { styles } from "../../tools/DefaultStyles"

const AboutPage = (props) => {
        return (
      <div style={styles.root}>
          <VerticalNavbar />
          <ContentSection id="about">
            <h1>About me</h1>
            <img src="./test.png" style={{height: "75vh", bottom: "-25px", right:"2rem", position: "absolute"}} alt='le me'/>
        </ContentSection>
      </div>
    )
}
  

export default AboutPage;