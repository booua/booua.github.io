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
    backgroundImage: "url(./bg.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  resumeTitle: {
    fontSize: "6vw",
    color: "rgb(204, 204, 204)",
    marginBottom: "2rem",
  },
};

function ResumeSection() {
  return (
    <section style={styles.resumeSection}>
      <span style={styles.resumeTitle}>Resume</span>
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={6} md={4}>
            <Timeline dateFormat="ll">
              <Container>
                <YearContent startDate="2020/10" currentYear />
                <BodyContent>
                  <Section title="Freelancer">
                    <Description text="Description" />
                    <Description text="Another description" />
                  </Section>
                </BodyContent>
              </Container>
              <Container>
                <YearContent startDate="2019/03" endDate="2020/05" />
                <BodyContent>
                  <Section title="CERN">
                    <Description text="Full Stack Developer" />
                    <Description text="Technical studentship" />
                  </Section>
                </BodyContent>
              </Container>
              <Container>
                <YearContent startDate="2017/01" endDate="2018/12" />
                <BodyContent>
                  <Section title="BeHappy.io">
                    <Description text="iOS Developer" />
                    <Description text="Another description" />
                  </Section>
                </BodyContent>
              </Container>
              <Container>
                <YearContent startDate="2017/06" endDate="2018/06" />
                <BodyContent>
                  <Section title="uKOD">
                    <Description text="Description" />
                    <Description text="Another description" />
                  </Section>
                </BodyContent>
              </Container>
              <Container>
                <YearContent startDate="2016/10" endDate="2017/07" />
                <BodyContent>
                  <Section title="Artists Entertainment">
                    <Description text="Full Stack Developer" />
                    <Description text="Another description" />
                  </Section>
                </BodyContent>
              </Container>
            </Timeline>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Timeline dateFormat="ll">
              <Container>
                <YearContent startDate="2020/07/01" currentYear />
                <BodyContent>
                  <Section title="Title3">
                    <Description variant="subtitle" text="Subtitle" />
                    <Description text="Description3" />
                    <Description text="Another description3" />
                  </Section>
                  <Section title="Another title3">
                    <Description text="Description3" />
                    <Description text="Another description3" />
                  </Section>
                </BodyContent>
              </Container>
              <Container>
                <YearContent startDate="2020/07/01" currentYear />
                <BodyContent>
                  <Section title="Title3">
                    <Description variant="subtitle" text="Subtitle" />
                    <Description text="Description3" />
                    <Description text="Another description3" />
                  </Section>
                  <Section title="Another title3">
                    <Description text="Description3" />
                    <Description text="Another description3" />
                  </Section>
                </BodyContent>
              </Container>
            </Timeline>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Timeline dateFormat="ll">
              <Container>
                <YearContent startDate="2016/10" endDate="2020/05" />
                <BodyContent>
                  <Section title="AGH University of Science and Technology">
                    <Description text="Mechatronic Engineering" />
                    <Description text="Bachelor's degree" />
                  </Section>
                </BodyContent>
              </Container>
              <Container>
                <YearContent startDate="2012/09" endDate="2016/06" />
                <BodyContent>
                  <Section title="Upper Secondary School of Communication">
                    <Description text="IT Specialist" />
                  </Section>
                </BodyContent>
              </Container>
            </Timeline>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default ResumeSection;
