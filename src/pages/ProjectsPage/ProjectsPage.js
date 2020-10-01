import React from "react"
import { motion } from "framer-motion"

function ProjectsPage (props) {
        return (
            <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}}>
                <h1>PROJECTS</h1>
            </motion.div>
        )
}

export default ProjectsPage;