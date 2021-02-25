import React, { useRef, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Button } from "../Button";
import styled from 'styled-components';

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
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;

@media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
    `;
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;




function Projects() {

   
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
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/eat-Da-burg-burg"}} target="_blank">Repository</Link>                    
                 </li>
                <li  className = "nav-item" id="nav-item">
                <FontAwesomeIcon icon="khanda" />
                <Link to={{ pathname:"https://samuraiswapmeet.herokuapp.com/"}} target="_blank">Samurai Swap Meet</Link>
                <br></br>
                <Link className="repository" to={{ pathname:"https://github.com/rendod99/Project_2"}} target="_blank">Repository</Link>
                </li>
                <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Link to={{ pathname:"https://limitless-hamlet-03137.herokuapp.com/?id=5fbaa8d0efd48b001768c5e2"}} target="_blank">Workout Tracker</Link> 
                <br></br>        
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/trackmyworkouts"}} target="_blank">Repository</Link>         
             </li>                  
                  <Button to="/homes">Learn More</Button>              
              </Content>
              </ColumnLeft> 
              <ColumnRight>
              <Image src="" 
              data-aos='fade-left'
              data-aos-duration='1200'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
              />              
              </ColumnRight>
           </Wrap>
        </Container>  
      </Section>












        // <div className="card"ref={el => {Card = el}}>
        //     <div className="card-content">
        //     <section >
        //     <li ref={el => {Card = el}} className = "nav-item" id="nav-item">
        //     <FontAwesomeIcon icon="hamburger" />
        //     <Link to={{ pathname:"https://real-estate-react-mock.herokuapp.com/"}} target="_blank">A mock real estate app</Link>
        //     <br></br>                    
        //     <Link ref={el => {Card = el}} className="repository" to={{ pathname:"https://github.com/neyneyalldayday/eat-Da-burg-burg"}} target="_blank">Repository</Link>                    
        //     </li>
        //     <li ref={el => {Card = el}} className = "nav-item" id="nav-item">
        //     <FontAwesomeIcon icon="khanda" />
        //     <Link to={{ pathname:"https://samuraiswapmeet.herokuapp.com/"}} target="_blank">Samurai Swap Meet</Link>
        //     <br></br>
        //     <Link className="repository" to={{ pathname:"https://github.com/rendod99/Project_2"}} target="_blank">Repository</Link>
        //     </li>
        //     <li ref={el => {Card = el}} className = "nav-item" id="nav-item">
        //     <FontAwesomeIcon icon="dumbbell" />
        //     <Link to={{ pathname:"https://limitless-hamlet-03137.herokuapp.com/?id=5fbaa8d0efd48b001768c5e2"}} target="_blank">Workout Tracker</Link> 
        //     <br></br>        
        //     <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/trackmyworkouts"}} target="_blank">Repository</Link>         
        //     </li>            
               
                    
        //     </section>


        //     </div>
            
        // </div>
    )
}

export default Projects
