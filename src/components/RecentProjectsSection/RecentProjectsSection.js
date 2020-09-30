import React from "react"
import Project from "../Project/Project"

const styles = ({

    projectSection: {
        height: "100%",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
    },

})

function RecentProjectsSection() {
    const projects = ["project1", "project2", "project3"]
    return(
        <section style={styles.projectSection}>
            <div>
                PROJECTS
                {
                    projects && projects.map(project => (
                            <Project key={project} title={project}/>
                        )
                    )
                }
            </div>
        </section>
            
    )
}

export default RecentProjectsSection