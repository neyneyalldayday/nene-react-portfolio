import React, { useRef, useEffect, useState } from "react";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Button } from "../Button";
import styled, { css } from 'styled-components/macro';
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

 @media screen and (max-width: 768px) {
     flex: 0 0 100%;
     max-width: 100%;
     margin-top: 250px;
 }

 h1 {
     margin-bottom: 2rem;
     font-size: 2rem;
 }

 p {
     margin-bottom: 2rem;
     line-height: 1.5;
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

@media screen and (max-width: 768px) {
    height: 320px;
    top: -365px;
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



const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #cb05fd;
border-radius; 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #cd853f;
    transform: scale(1.05);
}
`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
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

const nextSlide = () => {
    if(timeout.current){
        clearTimeout(timeout.current);  
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    if(timeout.current){
        clearTimeout(timeout.current)  
    }       
    setCurrent(current === 0 ? length - 1 : current - 1);
}

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
                  <h1>A few projects ive been working on</h1>
                  <p>Here are a list of some fullstack applications and websites that ive 
                      worked on in the past 6 months or so.
                  </p>
                  <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="hamburger" />
                    <Link to={{ pathname:"https://real-estate-react-mock.herokuapp.com/"}} target="_blank">A mock real estate app</Link>
                    <br></br>                    
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/realEstatereact"}} target="_blank">Repository</Link>                    
                 </li>
                 <Button to="/RealEstate" round="true">Learn More</Button>
                  <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="cat" />
                    <Link to={{ pathname:"https://bag-a-cat.herokuapp.com/"}} target="_blank">A mock cat adoption Website</Link>
                    <br></br>                    
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/Bag-a-Cat"}} target="_blank">Repository</Link>                    
                 </li>
                 <Button to="/BagaCat" round="true">Learn More</Button>
                <li  className = "nav-item" id="nav-item">
                <FontAwesomeIcon icon="khanda" />
                <Link to={{ pathname:"https://samuraiswapmeet.herokuapp.com/"}} target="_blank">Samurai Swap Meet</Link>
                <br></br>
                <Link className="repository" to={{ pathname:"https://github.com/rendod99/Project_2"}} target="_blank">Repository</Link>
                </li>
                <Button to="/SamauriSwap" round="true">Learn More</Button>
                <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Link to={{ pathname:"https://limitless-hamlet-03137.herokuapp.com/?id=5fbaa8d0efd48b001768c5e2"}} target="_blank">Workout Tracker</Link> 
                <br></br>        
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/trackmyworkouts"}} target="_blank">Repository</Link>         
             </li>                  
                  <Button to="/WorkOut" round="true">Learn More</Button>              
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
         <SliderButtons>
              <PrevArrow onClick={prevSlide} />
              <NextArrow onClick={nextSlide} />
          </SliderButtons>
              </ColumnRight>
           </Wrap>
        </Container>  
      </Section>

       
    )
}

export default Projects
