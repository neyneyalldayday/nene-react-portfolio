import React, { Component } from "react";
import "../icons";
// import Nene from "../nene"
import Title from "../title"
import Name from "../name"
import Navbar from "../navbar"
import Socials from "../socials"
import Projects from "../projects"
import Resume from "../resume"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AboutMe from "../aboutme";
  












class MainContainer extends Component {
    constructor(){
        super()
        this.state ={
            results: []
        };
    }
    componentDidMount(){
       
    }


render(){
    return ( 
        <Router>
        <div className = "App">   
            <Navbar />          
        <main className="container-fluid">  
                  
            <Title />
            <Name />
            <Route path="/AboutMe">
            <AboutMe/>
            </Route>
            <Route path="/Socials">
             <Socials />   
            </Route>
            <Route path="/Projects">
             <Projects />   
            </Route>      
            <Route path="/Resume">
             <Resume />   
            </Route>      
                   
        </main>
          </div>
        </Router>
    )
}
}

export default MainContainer;