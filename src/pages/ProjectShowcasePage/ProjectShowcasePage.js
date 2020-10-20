import React from "react";
import { useParams } from "react-router-dom";
import ContentSection from "../../components/ContentSection/ContentSection";

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
  root: {
    backgroundColor: "#0e0d0d",
  },
};

function ProjectShowcasePage(props) {
  let { projectId } = useParams();
  return (
    <div style={styles.root}>
      <ContentSection id={projectId}>
        <h1>{projectId}</h1>
      </ContentSection>
    </div>
  );
}

export default ProjectShowcasePage;
