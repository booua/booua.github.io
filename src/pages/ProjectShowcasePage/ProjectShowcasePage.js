import React from "react";
import { useParams } from "react-router-dom";
import ContentSection from "../../components/ContentSection/ContentSection";
import { ProjectsList } from "../../content/ProjectsList";

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
  logoStyles: {
    width: "150px",
  },
  projectImage: {
    width: "800px",
  },
};

function ProjectShowcasePage() {
  let { projectId } = useParams();

  return (
    <div style={styles.root}>
      <ContentSection id={projectId}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            textAlign: "center",
            display: "grid",
            gridTemplateRows: "0fr 1fr 1fr 3fr",
          }}
        >
          <h1>
            {!ProjectsList[projectId].logo ? ProjectsList[projectId].title : ""}
          </h1>
          <div>
            {ProjectsList[projectId].logo ? (
              <img
                src={ProjectsList[projectId].logo}
                style={styles.logoStyles}
                alt={ProjectsList[projectId].title}
              />
            ) : (
              ""
            )}
          </div>
          <div>{ProjectsList[projectId].content()}</div>
          <div>
            <img
              src={ProjectsList[projectId].imageAlt}
              style={styles.projectImage}
              alt={ProjectsList[projectId].title}
            />
          </div>
        </div>
      </ContentSection>
    </div>
  );
}

export default ProjectShowcasePage;
