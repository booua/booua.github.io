import React from "react"
import Glitchify from 'react-glitchify';
import { motion } from 'framer-motion'
import { welcomeSectionAnimation, headlineAnimation } from "../../tools/AnimationTypes"
import AnimatedSection from "../AnimatedSection/AnimatedSection";

const styles = ({
    welcomeSection:{
        fontFamily: "Montserrat",
        fontWeight: "100",
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
        maxWidth:"100vw",
        fontSize: "6vw",
        color: "white",
        textAlign: "center",
    },
    wrapper:{
        display: "flex",
        flex: "1 0 auto",
        flexDirection:"row",
        marginTop:"-5vh"
    },
    nameTextBox:{
        display: "flex",
        flex: "1 0 auto",
    },
    introductionTextBox:{
        textAlign:"center",
        display: "flex",
        flex: "1 0 auto",
        fontSize: "4vw",
        color: "white",
        marginTop: "3vw",
        marginRight: "1vw"
    },
    roleTextBox:{
        fontSize: "1.5vw",
        color: "white",
    }
})

function WelcomeSection() {
    return(
        <section style={styles.welcomeSection}>
            <div style={styles.welcomeTextBox}>
                <AnimatedSection>
                    <motion.div variants={welcomeSectionAnimation}>
                        <Glitchify
                            fontSize={"6vw"} 
                            color={"#ffffff"} 
                            background={"#0e0d0d"} 
                            steps={10}>
                            Hi
                        </Glitchify>
                    </motion.div>
                    <div style={styles.wrapper}>
                        <motion.span variants={headlineAnimation} style={styles.introductionTextBox}>My name is </motion.span>   
                        <motion.span variants={headlineAnimation} style={styles.nameTextBox}>
                            <Glitchify
                                fontSize={"5vw"}
                                color={"#ffffff"} 
                                background={"#0e0d0d"} 
                                steps={15}>
                                Jack
                            </Glitchify>
                        </motion.span>
                    </div>
                    <motion.span variants={headlineAnimation} style={styles.roleTextBox}>
                        full stack developer things-doer car enthusiast
                    </motion.span>
                </AnimatedSection>
            </div>
        </section>
            
    )
}

export default WelcomeSection