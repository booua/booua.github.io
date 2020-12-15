import React from "react";
import ContentSection from "../../components/ContentSection/ContentSection";
import { styles as defaultStyles } from "../../tools/DefaultStyles";

const AboutPage = () => {
  return (
    <div style={defaultStyles.root}>
      <ContentSection id="about">
      <h1 style={defaultStyles.articlesPageTitle}>About me</h1>
        <img
          src="./img/test.png"
          style={{
            height: "75vh",
            bottom: "-25px",
            right: "2rem",
            position: "absolute",
          }}
          alt="le me"
        />
      </ContentSection>
    </div>
  );
};

export default AboutPage;
