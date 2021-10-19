import React from "react";
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { GradientBackground } from "../Background/GradientBackground";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import {
  welcomeSectionAnimation,
  resumeItemEnterAnimation,
} from "../../tools/AnimationTypes";
import { motion } from "framer-motion";

const styles = {
  resumeSection: {
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flex: "1 0 auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  resumeTitle: {
    fontSize: "6vw",
    color: "rgb(204, 204, 204)",
    marginBottom: "2rem",
    zIndex: "4",
  },
  resumeContent: {
    zIndex: "4",
  },
  timelineTheme: {
    yearColor: "#fafafa",
    lineColor: "#c5c5c5",
    dotColor: "#c5c5c5",
    borderDotColor: "#ffffff",
    titleColor: "#ffffff",
    subtitleColor: "#afafaf",
    textColor: "#ffffff",
  }
};

function ResumeSection() {
  return (
    <section style={styles.resumeSection}>
      <GradientBackground />
      <AnimatedSection
        threshold={0.3}
        style={{
          zIndex: "4",
          display: "flex",
          flex: "1 0 auto",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <motion.span
          style={styles.resumeTitle}
          variants={welcomeSectionAnimation}
        >
          Resume
        </motion.span>
        <Grid style={styles.resumeContent}>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <motion.span variants={resumeItemEnterAnimation} custom={1}>
                <Timeline dateFormat="ll" theme={styles.timelineTheme}>
                <Container>
                    <YearContent startDate="2021/10" currentYear />
                    <BodyContent>
                      <Section title="Proxify">
                        <Description text="Network Member / Consultant" />
                        <Description variant="subtitle" text="Software Engineering" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2021/02" currentYear/>
                    <BodyContent>
                      <Section title="Jacek Paciorek">
                        <Description text="Owner" />
                        <Description variant="subtitle" text="Software Engineering & Consulting" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2021/01" currentYear />
                    <BodyContent>
                      <Section title="Gabi">
                        <Description text="Frontend Engineer" />
                        <Description text="" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2019/03" endDate="2020/05" />
                    <BodyContent>
                      <Section title="CERN">
                        <Description text="Full Stack Developer" />
                        <Description variant="subtitle" text="Technical studentship" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2017/01" endDate="2018/12" />
                    <BodyContent>
                      <Section title="BeHappy.io">
                        <Description text="iOS Developer" />
                        <Description variant="subtitle" text="App for people suffering from depression" />
                      </Section>
                    </BodyContent>
                  </Container>
                </Timeline>
              </motion.span>
            </Col>

            <Col xs={12} sm={12} md={4}>
              <motion.span variants={resumeItemEnterAnimation} custom={2}>
                <Timeline dateFormat="ll" theme={styles.timelineTheme}>
                <Container>
                    <YearContent startDate="2017/06" endDate="2018/06" />
                    <BodyContent>
                      <Section title="uKOD">
                        <Description text="Operations Team Leader" />
                        <Description variant="subtitle" text="Student research group interested in IT Security, cryptography and social engineering" />
                      </Section>
                    </BodyContent>
                  </Container>
                <Container>
                    <YearContent startDate="2016/10" endDate="2017/07" />
                    <BodyContent>
                      <Section title="Artists Entertainment">
                        <Description text="Full Stack Developer" />
                        <Description text="" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2016/07/01" endDate="2016/09/01" />
                    <BodyContent>
                      <Section title="Contellio">
                        <Description text="Full Stack Developer" />
                        <Description variant="subtitle" text="Internship" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2013/08/01" endDate="2013/09/01" />
                    <BodyContent>
                      <Section title="Petroinform.net">
                        <Description text="Fiber optics technician" />
                        <Description variant="subtitle" text="Internship" />
                      </Section>
                    </BodyContent>
                  </Container>
                </Timeline>
              </motion.span>
            </Col>

            <Col xs={12} sm={12} md={4}>
              <motion.span variants={resumeItemEnterAnimation} custom={3}>
                <Timeline dateFormat="ll" theme={styles.timelineTheme}>
                  <Container>
                    <YearContent startDate="2016/10" endDate="2020/05" />
                    <BodyContent>
                      <Section title="AGH University of Science and Technology">
                        <Description text="Mechatronic Engineering" />
                        <Description variant="subtitle" text="Bachelor's degree" />
                      </Section>
                    </BodyContent>
                  </Container>
                  <Container>
                    <YearContent startDate="2012/09" endDate="2016/06" />
                    <BodyContent>
                      <Section title="Upper Secondary School of Communication">
                        <Description variant="subtitle" text="IT Specialist" />
                      </Section>
                    </BodyContent>
                  </Container>
                </Timeline>
              </motion.span>
            </Col>
          </Row>
        </Grid>
      </AnimatedSection>
    </section>
  );
}

export default ResumeSection;
