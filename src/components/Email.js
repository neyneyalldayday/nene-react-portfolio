import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import{ init } from 'emailjs-com';
init("user_mhbJdi6jtA3khrB3mb8ec");

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


const Email = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'service_btgzq6q', e.target, 'user_mhbJdi6jtA3khrB3mb8ec')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
    return (
        <Container>
            <Section>
            <form  onSubmit={sendEmail}>
                    <input type="text" placeholder="Subject" name="subject" />
                        <label>Name</label>
                            <input type="text" placeholder="Your name" name="name" />
                            <label>Email</label>
                            <input type="email" placeholder="Email Address" name="email" />
                       <label>Message</label>
                    <textarea name="message" placeholder="Your message" />
                    <input type="submit" value="Send Message" />
                </form>
            </Section>                
        </Container>
       
    )
}

export default Email
