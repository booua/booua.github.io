import React from "react"

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

function ResumeSection() {
    return(
        <section style={styles.welcomeSection}>
            <div style={styles.welcomeTextBox}>
                RESUME
            </div>
        </section>
            
    )
}

export default ResumeSection