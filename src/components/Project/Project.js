import React from "react"
import { Card } from "../Card/Card"
import { Link } from "react-router-dom"

function Project(props) {
    const { title, id } = props
    return(
        <Link to={`/projects/${id}`}>
            <Card title={title}/>
        </Link>
    )
}

export default Project