import React from "react";
import { ProjectsList } from "../../content/ProjectsList";
import Project from "../../components/Project/Project";
import ContentSection from "../../components/ContentSection/ContentSection";
import { styles } from "../../tools/DefaultStyles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: calc(100% - 5rem);
  margin-left: 4rem;
  justify-content: center;
`;

function ProjectsPage(props) {
  return (
    <div style={styles.root}>
      <ContentSection>
        <h1>PROJECTS</h1>
        <Container>
          {ProjectsList &&
            Object.values(ProjectsList).map((project, index) => (
                <Project
                  size={Object.keys(ProjectsList).length}
                  index={index}
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  image={project.imageWide}
                  link={project.link}
                  irregularGrid
                />
            ))}
        </Container>
      </ContentSection>
    </div>
  );
}

export default ProjectsPage;
