import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Section = styled.section`
width: 100%;
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
display: flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1')};

h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

p{
    margin-bottom: 2 rem;
    
}
`;
const ColumnRight = styled.div`
padding: 1rem 2rem;
display: flex;
justify-content: center;
align-items: center;
order: ${({ reverse }) => (reverse ? '1' : '2')};

@media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
}

img{
    width:100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%
    }
}
`;
const LinkContainer = styled.div`
grid-row-start: 2;
margin-left: 3rem;
`;


const SearchMovies = ({
    heading,
    paragraphOne,
    paragraphTwo,   
    reverse,
    image,
    delay
}) => {
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
               <h1>{heading}</h1>
               <p>{paragraphOne}</p>
               <p>{paragraphTwo}</p>
               </ColumnLeft>
               <ColumnRight reverse={reverse}>
               <img src={image} alt="home"
               data-aos='zoom-out'
               data-aos-duration='1000'
               data-aos-once='true'
               data-aos-delay={delay}
               data-aos-anchor-placement='center bottom'
               />
               </ColumnRight>
               <LinkContainer>
               <li  className = "nav-item" id="nav-item">
               <FontAwesomeIcon icon="hamburger" />
                <Link to={{ pathname:"https://omdbsearchthing-f0xoxiekd-neyneyalldayday.vercel.app/"}} target="_blank">visit the app!!</Link>                           
                </li>
                <br></br>
                <li className="nav-item" id="nav-item">
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/omdbsearchthing"}} target="_blank">Visit the Repository</Link> 
                </li>
            </LinkContainer>
           </Container>
       </Section>
    )
}

export default SearchMovies