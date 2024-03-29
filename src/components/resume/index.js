
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoTwo from '../../images/photo-2.jpg'

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
justify-content: flex-end;
padding-right: 15rem;
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
}
    `;
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;



const Resume = () => { 
  
    
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
                       <h1>My Resume</h1>
                       <FontAwesomeIcon icon="skull-crossbones" />
                       <Link to={{ pathname:"https://docs.google.com/document/d/1QSTQthF5yeMU0Mo45b0FuBIbYkFvzMFQdzJ3Q_YWS_M/edit?usp=sharing"}} target="_blank">Resume</Link>               
                            
              </Content>
                    </ColumnLeft> 
                    <ColumnRight>
                        <Image src={PhotoTwo} 
                        data-aos='fade-left'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'
                        />              
                    </ColumnRight>
                </Wrap>
            </Container>  
      </Section>
       
            
             
    )
}

export default Resume
