import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components/macro';
import {motion, AnimatePresence} from 'framer-motion'
import { Button } from "../Button";



const Section = styled.section`
 background: #000d1a;
 padding: 12rem 0rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 height: 100vh;
 
`;

const Container = styled.div`
background: #efe1fb;
padding: 10rem 2rem;


`;
const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
flex-direction: column;

`;

const Content = styled.div`
 flex: 0 0 50%;
 padding: 5rem;
 

 @media screen and (max-width: 768px) {
     flex: 0 0 100%;
     max-width: 100%;
     margin-top: 250px;
 }

 h1 {
     margin-bottom: 2rem;
     font-size: 2rem;
     padding: 1em;
 }

 p {
     margin-bottom: 2rem;
     line-height: 1.5;
     padding: 1em;
 }
`;

const Image = styled(motion.img)`
height: 100%;
width: 100%;
max-width: 600px;
max-height: 400px;
object-fit: cover;
margin-bottom: 1rem;
position: relative;
`;


const ProjectSlide = styled.div`

width: 100%;
height: 100%;
`;

const ProjectSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
margin: 0;
`;

const Projects = ({ slides }) => {

    const [current , setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

useEffect(
    () => {
    const nextSlide = () => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current  = setTimeout(nextSlide, 3000);  

    return function () {
        if(timeout.current){
            clearTimeout(timeout.current);  
        }       
      };
    }, 
    [current, length]
    );



if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}


    const fadeAnimation = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { duration: 0.8}},
        exit: { opacity: 0}
    }



   
    return (
        <Section>
        <Container>        
           <Wrap>              
              <AnimatePresence>
                {slides.map((slide, index) => {
                     return (
                            <ProjectSlide key={index}>
                                 {index === current && (
                             <ProjectSlider>
                         <Image src={slide.image} alt={slide.alt}
                         initial='hidden'
                         animate='visible'
                         exit="exit"
                         variants={fadeAnimation}                         
                         />
                         <Content
                         data-aos='fade-right'
                         data-aos-duration='1200'
                         data-aos-delay='300'
                         data-aos-once='true'
                         data-aos-anchor-placement='center bottom'
                        >
                            <Title>{slide.title}</Title>
                            <Button 
                             data-aos='zoom-out' data-aos-duration='600' data-aos-delay='250'
                             to={slide.path} primary="true" round="true"
                             css={`max-width: 160px;`}
                            >{slide.label}</Button>
                            <p>Here's a list of some fullstack applications and websites that ive 
                                worked on in the past 6 months or so.
                            </p>
                                                                        
                        </Content>
                            </ProjectSlider>

                         )}  

                            </ProjectSlide>
          )
         })}
          
         </AnimatePresence>             
           </Wrap>
        </Container>  
      </Section>       
    )
}

export default Projects
