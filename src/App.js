import './App.css';
import React, {useEffect, useLayoutEffect} from "react";
import "../src/components/icons";
import { Route, Switch, useLocation } from "react-router-dom";
import AboutMe from './pages/Aboutme';
import Navbar from '../src/components/navbar';
import Resume from '../src/components/resume';
import Home from './pages';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ProjectPage from './pages/ProjectPage';
import RealEstate from './pages/RealEstate';
import BagaCat from './pages/BagaCat';
import SamauriSwap from './pages/SamauriSwap';
import WorkOut from './pages/WorkOut';









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
        <Navbar   />                        
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/aboutMe" component={AboutMe} />           
          <Route path="/projectpage"  component={ProjectPage} />            
          <Route path="/resume" component={Resume} />  
          <Route path="/realestate" component={RealEstate} />  
          <Route path="/bagacat" component={BagaCat} />  
          <Route path="/samauriswap" component={SamauriSwap} />  
          <Route path="/workout" component={WorkOut} />  
        </Switch> 
        <Footer />  
      </>    
  );
}

export default App;
