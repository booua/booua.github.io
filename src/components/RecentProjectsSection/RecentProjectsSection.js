import React from "react"
import Project from "../Project/Project"

const styles = ({

    welcomeSection:{
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
    },
    welcomeTextBox:{
        fontSize: "6rem",
        color: "white",
        textAlign: "center"
    }

})

function RecentProjectsSection() {
    const projects = ["project1", "project2", "project3"]
    return(
        <section style={styles.welcomeSection}>
            <div style={styles.welcomeTextBox}>
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