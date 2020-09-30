import React from "react"
import Glitchify from 'react-glitchify';

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
                <div>
                    <Glitchify 
                        fontSize={50} 
                        color={"#ffffff"} 
                        background={"#0e0d0d"} 
                        steps={10}>
                        Hi
                    </Glitchify>
                </div>

            </div>
        </section>
            
    )
}

export default WelcomeSection