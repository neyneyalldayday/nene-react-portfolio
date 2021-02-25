import './App.css';
import React, {useEffect, useLayoutEffect} from "react";
import "../src/components/icons";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutMe from './pages/Aboutme';
import Navbar from '../src/components/navbar';
import Projects from '../src/components/projects'
import Resume from '../src/components/resume'
import Home from './pages';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import Aos from 'aos';
import 'aos/dist/aos.css'








function App() {

  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])
  
  useEffect(() => {
    Aos.init({})
  })




  return (

    <>  
        <GlobalStyle />      
        <Navbar />                  
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/aboutMe" component={AboutMe} />           
          <Route path="/projects" component={Projects} />            
          <Route path="/resume" component={Resume} />     
        </Switch> 
        <Footer />  
      </>    
  );
}

export default App;
