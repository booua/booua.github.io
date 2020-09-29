import React from "react"

const styles = ({

    welcomeSection:{
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        height: "100%",
        minHeight: "100vh",
        width: "100%",
    },
    welcomeTextBox:{
        fontSize: "6rem",
        color: "white",
        textAlign: "center",
    }
})

function WelcomeSection() {
    return(
        <section style={styles.welcomeSection}>
            <div style={styles.welcomeTextBox}>
                <span>Hi </span>
            </div>
        </section>
            
    )
}

export default WelcomeSection