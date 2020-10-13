import React from "react"
import ContentSection from "../../components/ContentSection/ContentSection";
import VerticalNavbar from "../../components/VerticalNavbar";
import { styles } from "../../tools/DefaultStyles"

const AboutPage = (props) => {
        return (
      <div style={styles.root}>
          <VerticalNavbar />
          <ContentSection id="about">
            <h1>AboutPage</h1>
        </ContentSection>
      </div>
    )
}
  

export default AboutPage;