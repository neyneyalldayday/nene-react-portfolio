import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    
    Link
  } from "react-router-dom";



                 

    class Navbar extends Component {
        

    render(){
        return(
            <nav className = "navbar">
               
                    <ul className = "navbar-nav">
        <li className="logo">          
        <br />
        <FontAwesomeIcon icon="beer"/>
        <span className="link-text">N-N ALL D-D</span>   
            
        </li>
                                
        
       <li className = "nav-item">
           <a href = "/Home" className = "nav-link" >
           <FontAwesomeIcon icon="house-user" />           
           <span className = "link-text" >Home</span>
           </a>
       </li>
       <li className = "nav-item">
           <Link to= "/AboutMe" className = "nav-link" >
           <FontAwesomeIcon icon="cat" />           
           <span className = "link-text" >About Me</span>
           </Link>
       </li>
       <li className = "nav-item">
           <Link to= "/Socials" className = "nav-link" >
           <FontAwesomeIcon icon="biking" />
           <span className = "link-text" >Socials</span>
           </Link>           
       </li>
       <li className = "nav-item">
           <Link to= "/Projects" className = "nav-link" >
           <FontAwesomeIcon icon="brain"/>
           <span className = "link-text" >projects</span>
           </Link>
       </li>
       <li className = "nav-item">
           <Link to= "/Resume" className = "nav-link" >
           <FontAwesomeIcon icon="skull-crossbones"/>
           <span className = "link-text" >Resume</span>
           </Link>
       </li>
    </ul>
    {/* </div> */}
</nav>

        )

    }

    }

    





export default Navbar