import React from "react"

const styles = ({
    resumeSection: {
        height: "100%",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        backgroundImage: "url(./bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
    },
})

function ResumeSection() {
    return(
        <section style={styles.resumeSection}>
            <div>
                RESUME
            </div>
        </section>    
    )
}

export default ResumeSection