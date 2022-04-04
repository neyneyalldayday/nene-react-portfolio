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
import SaraArt from './pages/SaraArt';
import Sherry from './pages/Sherry';
import TwoK from './pages/TwoK';
import MovieS from './pages/MovieS';
import Roots from './pages/Roots';
import Future from './pages/Future';
import Currently from './pages/Currently';
import Gamming from './pages/Gamming';
import Cinema from './pages/Cinema';
import PcBuilds from './pages/PcBuilds';
import Email from './pages/Emailpage';
import Hero from './components/Hero';











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
          <Route path="/saraart" component={SaraArt} />  
          <Route path="/sherry" component={Sherry} />  
          <Route path="/twok" component={TwoK} />  
          <Route path="/movies" component={MovieS} />  
          <Route path="/roots" component={Roots} />  
          <Route path="/future" component={Future} />  
          <Route path="/currently" component={Currently} />  
          <Route path="/gamming" component={Gamming} />  
          <Route path="/cinema" component={Cinema} />  
          <Route path="/pcbuilds" component={PcBuilds} />  
          <Route path="/emailpage" component={Email} />  
        </Switch> 
        <Hero />     
        <Footer />  
      </>    
  );
}

export default App;
