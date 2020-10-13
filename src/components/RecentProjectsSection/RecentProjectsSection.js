import React from "react"
import Project from "../Project/Project"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ProjectsList } from "../../content/ProjectsList"

const styles = ({
    recentProjecsContainer:{
        height: "100%",
        minHeight: "100vh",
        maxWidth: "100vw",
        width: "100%",
        textAlign:"center",
        color: "#ffffff",
        paddingTop:"3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
    },
    projectSection: {
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row"
    },
    recentProjectsTitle:{
        fontSize: "6vw",
        paddingTop: "10%",
    }

})

function RecentProjectsSection() {
    return(
        <section style={styles.recentProjecsContainer}>
            <span style={styles.recentProjectsTitle}>Recent projects</span>
            <div style={styles.projectSection}>
                <Grid>
                    <Row center="xs">
                        {
                            ProjectsList && Object.values(ProjectsList).map((project,index) => { 
                            if (index > 2) return "";
                                    return (
                                        <Col xs={12} sm ={6} md={4} key={"col-"+project.id}>
                                            <Project key={project.id} image={project.image} id={project.id} title={project.title}/>
                                        </Col>
                                    )}
                            )
                        }
                </Row>
                </Grid>
            </div>
        </section>
    )
}

export default RecentProjectsSection