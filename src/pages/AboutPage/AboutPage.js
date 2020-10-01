import React from "react"
import { motion } from "framer-motion"

const AboutPage = (props) => {
        return (
            <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}}>
                <h1>About</h1>
            </motion.div>
        )
}

export default AboutPage;