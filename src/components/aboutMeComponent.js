import styled from 'styled-components';
import DeskPhoto from '../images/desk.jpg'


const AboutMePage = () => {

    const Section = styled.section`
     background: rgb(218, 191, 226);
     padding: 12rem 0rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
    `;

    const Container = styled.div`
    background: #fff;
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
    left: 0;}


    `;



    const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;

    
   
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
                        <h1>About Rene</h1>
                        <p>A little about me, my name is Rene Trevino. A fullstack software
                            developer. In years past i worked as a photographer and videographer.
                            I got interested in sofware development after tinkering with programs
                            and building p.c computers. Build em now talk to em, i guess was the mindset.
                        </p>
                        <h1>Software Skills</h1>
                        <p>HTML, CSS, SASS, framer motion, gsap, aos, Javascript, express.js, node.js, React, mongoDB, mySQL, </p>
                       
                    </Content>
                    </ColumnLeft>
                    <ColumnRight>
                    <Image src={DeskPhoto}
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



export default AboutMePage;