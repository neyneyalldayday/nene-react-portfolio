import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/projects'
import Resume from '../components/resume'
import { ProjectData } from '../data/ProjectData'
import AboutMe from './Aboutme'

const Home = () => {
    return (
        <>
            <Hero  /> 
            <AboutMe />             
            <Projects slides={ProjectData} />
            <Resume />
        </>
    )
}

export default Home
