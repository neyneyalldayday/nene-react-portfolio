import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/projects'
import Resume from '../components/resume'
import AboutMe from './Aboutme'

const Home = () => {
    return (
        <>
            <Hero  /> 
            <AboutMe />             
            <Projects />
            <Resume />
        </>
    )
}

export default Home
