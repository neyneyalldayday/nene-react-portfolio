import React from 'react'
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube,} from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Button } from './Button';
import { GoMarkGithub } from "react-icons/go";

const Section = styled.section`
background: #000d1a;
color: #fff;
width: 100%;
min-height: 600px;
padding: 3rem calc((100vw - 1300px) / 2);
`;
const Container = styled.div`
 height: 100%;
 width: 100%;
 padding: 2rem;
`;

const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 4rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;
const Quote = styled.div`
flex: 1;
padding: 2rem 0rem;

h3 {
    font-size: clamp(2rem, 8vw, 5rem);
}
`;

const FooterInfo = styled.div`
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;


a {
    color: #fff;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    padding: 1rem 0rem;
}
`;
const FooterBottom = styled.div`
display: flex;
padding: 2rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;


const SocialIcons = styled.div`
display: flex;
width: 50%;

@media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
}
`;

const Icons = css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: plum;
`;

const Instagram = styled(FaInstagram)`
${Icons}
`;


const Facebook = styled(FaFacebookF)`
${Icons}
`;


const LinkedIn = styled(FaLinkedinIn)`
${Icons}
`;


const Youtube = styled(FaYoutube)`
${Icons}
`;
const GitHub = styled(GoMarkGithub)`
${Icons}
`;


const Contact = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;


@media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
}
`;

const Footer = () => {
    return (
        <div>
            <Section>
                <Container>
                    <FooterTop>
                        <Quote>
                            <h3>Its pretty addictive to kill time <br />kill with moderation</h3>
                        </Quote>
                        <FooterInfo>
                            <h4>Contact me</h4>
                            <Link to="/Roots">my roots</Link>
                            <Link to="/Future">my future</Link>
                            <Link to="/Currently">currenty</Link>
                        </FooterInfo>
                        <FooterInfo>
                            <h4>more rene things</h4>
                            <Link to="/aboutme">gaming</Link>
                            <Link to="/aboutme">cinema</Link>
                            <Link to="/aboutme">photography</Link>
                        </FooterInfo>
                    </FooterTop>
                    <FooterBottom>                       
                    <SocialIcons>
                    <h1>check out my socials</h1>
                          <a href="https://www.youtube.com/channel/UCaHYzfP3a-uNic29DerEiLw?pbjreload=102" rel="noopener noreferrer" 
                          target="_blank">
                            <Youtube /> 
                            </a> 
                          <a href="//www.instagram.com/neyneyalldayday" rel="noopener noreferrer" 
                          target="_blank">
                            <Instagram /> 
                            </a> 
                          <a href="//www.google.com" rel="noopener noreferrer" 
                          target="_blank">
                            <Facebook />  
                          </a>
                          <a href="https://www.linkedin.com/in/rene-trevino-236058169/" rel="noopener noreferrer" 
                          target="_blank">
                            <LinkedIn />  
                          </a>
                          <a href="https://github.com/neyneyalldayday" rel="noopener noreferrer" 
                          target="_blank">
                            <GitHub />  
                          </a>
                      </SocialIcons> 
                      <Contact>
                          <Button to='/'>
                              Lets Chat <IoMdArrowRoundForward />
                          </Button>
                      </Contact>
                    </FooterBottom>
                </Container>
            </Section>           
        </div>
    )
}

export default Footer
