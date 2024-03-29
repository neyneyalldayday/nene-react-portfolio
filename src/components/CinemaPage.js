import React, {useState, useRef, useEffect} from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import {motion, AnimatePresence} from 'framer-motion'

const CinemaSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const CinemaWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;

`;

const CinemaSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;

`;

const CinemaSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;


&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
    );
}
`;


const CinemaImage = styled(motion.video)`
position: absolute;
top: 0;
left: 0;
max-width: 100%;
min-height: 100%;
object-fit: contain;


`; 


const CinemaContent= styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;

h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: right;
    margin-bottom: 0.8rem;
}
p {
    margin-bottom: 1.2rem;
    text-align: right;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #6649b8;
cursor: pointer;
background: #000d1a;
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

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;

const CinemaPage = ({slides}) => {

    const [current , setCurrent] = useState(0)
const length = slides.length
const timeout = useRef(null)

useEffect(
    () => {
    const nextSlide = () => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current  = setTimeout(nextSlide, 300000);  

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
    <CinemaSection>
                <CinemaWrapper>
                            <AnimatePresence>
                                {slides.map((slide, index) => {
                                    return (
                        <CinemaSlide key={index}>
                                        {index === current && (
                            <CinemaSlider>
                                        <CinemaImage src={slide.image} alt={slide.alt}
                                        autoPlay loop 
                                        initial='hidden'
                                        animate='visible'
                                        exit="exit"
                                        variants={fadeAnimation}
                                    />
                                <CinemaContent>
                                    <h1 data-aos='fade-down' data-aos-duration='600'>{slide.title}</h1>
                                    <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>{slide.paragraphOne}</p>
                                    <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>{slide.paragraphTwo}</p>
                                        <Button
                                            data-aos='zoom-out' data-aos-duration='600' data-aos-delay='250'
                                            to={slide.path}  round="true"
                                            css={`max-width: 160px;`}
                                        >
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                </CinemaContent>                   
                            </CinemaSlider>
                    )}              
                        </CinemaSlide>
                )
        })} 
                            </AnimatePresence> 
                            <SliderButtons>
                            <PrevArrow onClick={prevSlide} />
                            <NextArrow onClick={nextSlide} />
                            </SliderButtons>
                </CinemaWrapper>            
    </CinemaSection>
    )
}

export default CinemaPage
