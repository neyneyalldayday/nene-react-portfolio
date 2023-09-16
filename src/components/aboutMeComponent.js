import styled from "styled-components";
import DeskPhoto from "../images/desk.jpg";

const AboutMePage = () => {
  const Section = styled.section`
    background: rgb(218, 191, 226);
    padding: 12rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 12rem 0.5rem;
    }
  `;

  const Container = styled.div`
    background: #fff;
    padding: 3rem 2rem;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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

    h3 {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    p {
      margin-bottom: 2rem;
      line-height: 1.5;
      font-size: 1em;
    }
  `;

  const ColumnRight = styled.div`
    position: absolute;
    top: -80px;
    right: 0;
    max-width: 850px;
    width: 45%;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
      height: 320px;
      top: -65px;
      width: 80%;
      margin: 0 auto;
      left: 0;
    }
img{
  width: 100%;
  object-fit: cover;
  border-radius:5px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.8);
}
   
  `;

  

  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h1>About Rene</h1>
              <p>
                Hello Im Rene a web developer with expertise in various
                front-end and back-end technologies. I specialize in building
                responsive and interactive web applications using HTML, CSS, and
                JavaScript. With a strong foundation in client-side
                technologies, I also have extensive experience working with
                popular frameworks like React and libraries like Redux.
                </p>
                <p>
                 On the front-end, I'm proficient in developing mobile applications
                using React Native, creating beautiful UIs with Material UI,
                Bootstrap, and Materialize, and leveraging the power of
                Styled-Components and SCSS for modular and maintainable styles.
                I'm also experienced in working with templating engines like
                Handlebars and utilizing jQuery for DOM manipulation and
                enhanced user experiences. 
                </p>
                <p>
                In the back-end realm, I'm
                well-versed in server-side technologies such as Node.js and
                Express, enabling me to build robust and scalable server
                applications. I have hands-on experience with server-side
                rendering frameworks like Next.js, and I'm skilled in
                configuring and optimizing build tools like Webpack.
                Additionally, I have a good understanding of GraphQL and have
                worked with Apollo for efficient data fetching and manipulation.
                I'm familiar with JSON Web Tokens (JWT) for secure
                authentication and authorization, and I have utilized Socket.io
                for real-time communication between clients and servers.
                Nodemailer is another tool I've worked with for handling email
                sending functionality.
                </p>
                <p>
                When it comes to databases, I have
                experience working with MongoDB and MySQL, using ORMs like
                Mongoose and Sequelize for efficient data modeling and querying.
                I'm also knowledgeable about Firebase and its real-time database
                capabilities.
                </p>
                <p>
                For testing purposes, I'm well-versed in using
                tools like Jest, Chai, and Mocha to ensure the reliability and
                quality of my codebase. In terms of environments, I have
                proficiency in Windows 10 and Git Bash on the Linux command
                line, allowing me to work across different operating systems.
                I'm also experienced in utilizing various development tools such
                as Chrome Developer Tools and React Developer Tools for
                debugging and optimizing applications.
                </p>
                <p>
                Beyond the core development skills, I have knowledge of microservice
                architecture and understand its benefits in creating scalable
                and modular systems. I have experience working with cloud
                services like AWS S3 for storage and deployment, as well as
                deploying applications to platforms like Heroku and Vercel. I'm
                well-versed in Git version control and have used GitHub Pages
                for hosting static websites.
                </p>
                <p>
                In addition to my technical skills, I have a strong creative side. I have soft skills in Adobe
                products like Premiere Pro and Photoshop, allowing me to create
                and edit multimedia content effectively. As a passionate
                photographer, I bring an eye for detail and composition to my
                work. Photography is not only my skill but also my creative
                outlet, enabling me to capture moments and tell stories through
                images. Furthermore, I am an avid BMX rider, which fuels my
                passion for creativity and pushing boundaries both on and off
                the computer screen.
                </p>
                <p>
                Overall, I am a dedicated and versatile
                developer with a passion for creating exceptional web
                applications. I strive to stay updated with the latest industry
                trends and technologies to deliver high-quality solutions that
                meet the needs of clients and users alike.    
                </p>            
              <section>
                <h3>Software Skills</h3>
                <p>
                  <strong>Client:</strong> HTML, CSS, JavaScript, React, Redux,
                  React Native, Material UI, Bootstrap, Materialize,
                  Styled-Components, SCSS, Handlebars, jQuery
                  <br />
                  <strong>Server:</strong> NodeJS, Express, Next.js, Webpack,
                  Gatsby/NextJS Serverless Functions, GraphQL, Apollo, JSON Web
                  Tokens, Socket.io, Nodemailer
                  <br />
                  <strong>Database/ORM:</strong> MongoDB, MySQL, Firebase,
                  Mongoose, Sequelize
                  <br />
                  <strong>Testing:</strong> Jest, Chai, Mocha
                  <br />
                  <strong>Environments:</strong> Windows 10, git Bash Linux
                  Command Line
                  <br />
                  <strong>Other:</strong> Microservice Architecture, AWS S3,
                  Git, GitHub Pages, Heroku, Vercel, Chrome Developer Tools,
                  React Developer Tools
                </p>
              </section>
            </Content>
          </ColumnLeft>
          <ColumnRight>         
            <img src={DeskPhoto} alt="home"
               data-aos='zoom-out'
               data-aos-duration='1000'
               data-aos-once='true'               
               data-aos-anchor-placement='center bottom'
               />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default AboutMePage;
