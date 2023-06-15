import React from 'react'
import styled from 'styled-components/macro';
import PhotoOne from '../images/photo-1.jpg'


const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;

`;

const HeroWrapperContainer = styled.section`
display:flex;
justify-content: flex-end;
align-items: flex-end;
margin: 3rem;


@media (max-width: 768px){
    margin-top: 6rem;
}
@media (min-width:1024px){
    margin: 1rem;
}
`

const HeroWrapper = styled.div`
width: 50rem;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;


@media (min-width:1024px){
    width: 80rem;
    border: 2px solid #D5AC4E;
}
`;



const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
object-fit: cover;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

`;

const HeroContent= styled.div`
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
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: right;
}

@media (max-width: 600px){
    background-color: #533C50;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 10px; 
}
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapperContainer>
            <HeroWrapper>                   
                <HeroImage src={PhotoOne} />
                <HeroContent>
                        <h1>Hello my name is rene</h1>
                        <p>i am a software engineer</p>
                </HeroContent>             
            </HeroWrapper>
            </HeroWrapperContainer>
        </HeroSection>
    )
}

export default Hero
