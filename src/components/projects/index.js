import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Button } from "../Button";
import styled from 'styled-components/macro';
import {motion, AnimatePresence} from 'framer-motion'


const Section = styled.section`
 background: #000d1a;
 padding: 12rem 0rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

const Container = styled.div`
background: #efe1fb;
padding: 3rem 2rem;
position: relative;
`;
const Wrap = styled.div`
max-width: 1200px;
margin: 0 auto;
flex-direction: row;
`;
const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
justify-content: flex-start;
padding: 1rem;
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
const ColumnRight = styled.div`
position: absolute;
top: -400px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;
z-index: 1;

@media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
    `;
const Image = styled(motion.img)`
height: 100%;
width: 100%;
max-width: 600px;
max-height: 400px;
object-fit: cover;
margin-bottom: 1rem;
`;


const ProjectSlide = styled.div`
z-index: 1;
width: 50%;
height: 50%;
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
padding: 2em;
`;




const Links = styled(Link)`
padding: 1em;
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
              <ColumnLeft>
              <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
              >
                  <Title>A few projects ive been working on</Title>
                  <p>Here's a list of some fullstack applications and websites that ive 
                      worked on in the past 6 months or so.
                  </p>
                 
                  <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="hamburger" />
                    <Links to={{ pathname:"https://real-estate-react-mock.herokuapp.com/"}} target="_blank">A mock real estate app</Links>
                    <br></br>                    
                <Links className="repository" to={{ pathname:"https://github.com/neyneyalldayday/realEstatereact"}} target="_blank">Repository</Links>                    
                 </li>
                 <Button to="/RealEstate" round="true" big="true">Learn More</Button>
                  <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="cat" />
                    <Links to={{ pathname:"https://bag-a-cat.herokuapp.com/"}} target="_blank">A mock cat adoption Website</Links>
                    <br></br>                    
                <Links className="repository" to={{ pathname:"https://github.com/neyneyalldayday/Bag-a-Cat"}} target="_blank">Repository</Links>                    
                 </li>
                 <Button to="/BagaCat" round="true" big="true">Learn More</Button>
                <li  className = "nav-item" id="nav-item">
                <FontAwesomeIcon icon="khanda" />
                <Links to={{ pathname:"https://samuraiswapmeet.herokuapp.com/"}} target="_blank">Samurai Swap Meet</Links>
                <br></br>
                <Links className="repository" to={{ pathname:"https://github.com/rendod99/Project_2"}} target="_blank">Repository</Links>
                </li>
                <Button to="/SamauriSwap" round="true" big="true">Learn More</Button>
                <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Links to={{ pathname:"https://limitless-hamlet-03137.herokuapp.com/?id=5fbaa8d0efd48b001768c5e2"}} target="_blank">Sara Rangel Art Page</Links> 
                <br></br>        
                <Links className="repository" to={{ pathname:"https://github.com/neyneyalldayday/rangel-works"}} target="_blank">Repository</Links>         
             </li>                  
                  <Button to="/WorkOut" round="true" big="true">Learn More</Button>
                                             
                <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Links to={{ pathname:"https://katys-bakery-dh29m58jx-neyneyalldayday.vercel.app/"}} target="_blank">Serrying Bakery</Links> 
                <br></br>        
                <Links className="repository" to={{ pathname:"https://github.com/neyneyalldayday/Katys-bakery"}} target="_blank">Repository</Links>         
             </li>                  
                  <Button to="/WorkOut" round="true" big="true">Learn More</Button>
                                             
                <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Links to={{ pathname:"https://omdbsearchthing-f0xoxiekd-neyneyalldayday.vercel.app/"}} target="_blank">Random Move Search App</Links> 
                <br></br>        
                <Links className="repository" to={{ pathname:"https://github.com/neyneyalldayday/omdbsearchthing"}} target="_blank">Repository</Links>         
             </li>                  
                  <Button to="/WorkOut" round="true" big="true">Learn More</Button>
                                             
                <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Links to={{ pathname:"https://nba2k2022-team-stats-archive2-5pqp6ncod-neyneyalldayday.vercel.app/"}} target="_blank">2kteir.com</Links> 
                <br></br>        
                <Links className="repository" to={{ pathname:"https://github.com/neyneyalldayday/nba2k2022TeamStatsArchive"}} target="_blank">Repository</Links>         
             </li>                  
                  <Button to="/WorkOut" round="true" big="true">Learn More</Button>
                                             
              </Content>
              </ColumnLeft> 
              <ColumnRight>
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
                            </ProjectSlider>

                         )}                  
                            </ProjectSlide>
          )
         })} 
         </AnimatePresence> 
        
              </ColumnRight>
              
           </Wrap>
        </Container>  
      </Section>

       
    )
}

export default Projects
