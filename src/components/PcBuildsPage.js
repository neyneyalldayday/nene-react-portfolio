import React, { useRef, useEffect, useState }  from 'react'
import styled, { css } from 'styled-components/macro';
import {motion, AnimatePresence} from 'framer-motion';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const Section = styled.section`
width: 100%
height: 100%;
padding: 4rem 0rem;
`;
const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;
background: #efe1fb;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;
const ColumnLeft = styled.div`
flex-direction: column;
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
top: -200px;
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

 const Video = styled(motion.img)`
height: 100%;
width: 100%;
max-width: 600px;
max-height: 400px;
object-fit: contain;
margin-bottom: 1rem;
margin-right: 1rem;
`;

const PcSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;

`;

const PcSlider = styled.div`
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
bottom: 300px;
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


const PcBuildsPage = ({
    slides,
    heading,
    paragraphOne,
    paragraphTwo,  
    reverse,    
    delay 
}) => {

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
            <ColumnLeft          
             reverse={reverse}
             data-aos='fade-up'
             data-aos-duration='1000'
             data-aos-once='true'
             data-aos-delay={delay}
             data-aos-anchor-placement='center bottom'
            >
            <Content>
            <h1>{heading}</h1>
            <p>In 2017 i started building p.c computers. I cant really remember if it was Destiny 2 comming to P.C. or the fact that i needed a computer that could edit 4k video quickly.</p>
            <p>Ive worked on cars and all sorts of random things i have no buisness tinkering with. So i figured how hard can it be, i went to town on YouTube watching computer builds by the likes of BitWit and Paul, Jays two cents and quite a few others.</p>
            <p>over the years ive adopted that susi guys logic of .1% better everytime. I like how simple it really can be to create such a compicated object. Understanding how all these components "speak" to eachother is qute amazing. Kind of an electronic dance.</p>
            </Content>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
            <AnimatePresence>
                {slides.map((slide, index) => {
                     return (
                            <PcSlide key={index}>
                                 {index === current && (
                             <PcSlider>
                         <Video src={slide.image} alt={slide.alt}
                         autoPlay loop 
                         data-aos='zoom-out'
                         data-aos-duration='1000'
                         data-aos-once='true'
                         data-aos-delay={delay}
                         data-aos-anchor-placement='center bottom'
                         initial='hidden'
                         animate='visible'
                         exit="exit"
                         variants={fadeAnimation}
                        />                         
                            </PcSlider>

                         )}                  
                            </PcSlide>
          )
         })} 
         </AnimatePresence> 
         <SliderButtons>
              <PrevArrow onClick={prevSlide} />
              <NextArrow onClick={nextSlide} />
          </SliderButtons>
            </ColumnRight>
        </Container>
    </Section>
    )
}

export default PcBuildsPage
