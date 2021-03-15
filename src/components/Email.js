import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import {Button} from '../components/Button'
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

const Form = styled.form`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subject = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
border: none;
`;

const Name = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
border: none;
`;

const EmailAddress = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
border: none;
`;

const Textarea = styled.textarea`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 60%;
margin-bottom: 5px;
border: none;
`;


const Email = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_btgzq6q', 'template_elt7e33', e.target, 'user_mhbJdi6jtA3khrB3mb8ec')
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
            <Form  onSubmit={sendEmail}>
                    <Subject type="text" placeholder="Subject" name="subject" />
                        <label>Name</label>
                            <Name type="text" placeholder="Your name" name="name" />
                            <label>Email</label>
                            <EmailAddress type="email" placeholder="Email Address" name="email" />
                       <label>Message</label>
                    <Textarea name="message" placeholder="Your message" />
                    <Button>
                    <input type="submit" value="Send Message" />  
                    </Button>
                    
                </Form>
            </Section>                
        </Container>
       
    )
}

export default Email
