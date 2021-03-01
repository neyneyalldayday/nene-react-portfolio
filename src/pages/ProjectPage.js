import React from 'react'
import Projects from '../components/projects'
import { ProjectData } from '../data/ProjectData'

const ProjectPage = () => {
    return (
        <div>
            <Projects slides={ProjectData} />
        </div>
    )
}

export default ProjectPage
