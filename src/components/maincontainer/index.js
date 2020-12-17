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
            <Switch>
            <Route path="/aboutMe">
            <AboutMe/>
            </Route>
            <Route path="/socials">
             <Socials />   
            </Route>
            <Route path="/projects">
             <Projects />   
            </Route>      
            <Route path="/resume">
             <Resume />   
            </Route> 
            </Switch>         
                   
        </main>
          </div>
        </Router>
    )
}
}

export default MainContainer;