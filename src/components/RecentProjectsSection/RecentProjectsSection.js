import React from "react";
import Project from "../Project/Project";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ProjectsList } from "../../content/ProjectsList";
import { motion } from "framer-motion";
import {
  projectItemEnterAnimation,
  welcomeSectionAnimation,
} from "../../tools/AnimationTypes";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { useInView } from "react-intersection-observer";

const styles = {
  recentProjecsContainer: {
    height: "100%",
    minHeight: "100vh",
    maxWidth: "100vw",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    paddingTop: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  projectSection: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "10rem",
  },
  recentProjectsTitle: {
    fontSize: "6vw",
  },
};

function RecentProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <section style={styles.recentProjecsContainer}>
      <AnimatedSection threshold={0.3}>
        <motion.span
          style={styles.recentProjectsTitle}
          variants={welcomeSectionAnimation}
        >
          Recent projects
        </motion.span>
        <div style={styles.projectSection}>
          <Grid>
            <Row center="xs">
              {ProjectsList &&
                Object.values(ProjectsList).map((project, index) => {
                  if (index > 2) return "";
                  return (
                    <Col xs={12} sm={6} md={4} key={"col-" + project.id}>
                      <motion.div
                        style={{
                          width: "100%",
                        }}
                        ref={ref}
                        custom={index}
                        initial="hidden"
                        variants={projectItemEnterAnimation}
                        animate={inView ? "visible" : "hidden"}
                      >
                        <Project
                          key={project.id}
                          image={project.image}
                          id={project.id}
                          title={project.title}
                        />
                        {project.title}
                      </motion.div>
                    </Col>
                  );
                })}
            </Row>
          </Grid>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default RecentProjectsSection;
