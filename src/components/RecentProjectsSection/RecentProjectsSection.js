import React from "react"
import Project from "../Project/Project"
import { Row, Col } from "../Grid/Grid"

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
    const projects = ["project1", "project2", "project3"]
    return(
        <section style={styles.recentProjecsContainer}>
            <span style={styles.recentProjectsTitle}>Recent projects</span>
            <div style={styles.projectSection}>
                <Row collapse={'md'}>
                    {
                        projects && projects.map(project => (
                                <Col size={2}>
                                        <Project key={project} id={project} title={project}/>
                                </Col>
                            )
                        )
                    }
                </Row>
            </div>
        </section>

            
    )
}

export default RecentProjectsSection