import React from "react"
import { ProjectCard } from "../ProjectCard/ProjectCard"

function Project(props) {
    const { title, index, size, irregularGrid, id, image, link} = props
    return(
            <ProjectCard link={link} title={title} index={index} image={image} size={size} id={id} irregularGrid={irregularGrid}/>
    )
}

export default Project