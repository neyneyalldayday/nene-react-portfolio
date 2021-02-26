import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link  } from "react-router-dom";



                 

    const Navbar = () =>  {
       
     
    
 
        return(
            <nav className = "navbar" >
            
             <ul className = "navbar-nav">
             <li className="logo">          
             <br />
             <FontAwesomeIcon icon="beer"/>
                <span className="link-text">N-N ALL D-D</span>   
            
        </li>
                                
        
       <li className = "nav-item">
          <Link to= "/home" className = "nav-link" >
           <FontAwesomeIcon icon="house-user" />           
           <span className = "link-text" >Home</span>
           </Link>
       </li>
       <li className = "nav-item">
           <Link to= "/AboutMe" className = "nav-link" >
           <FontAwesomeIcon icon="cat" />           
           <span className = "link-text" >About Me</span>
           </Link>
       </li>      
       <li className = "nav-item">
           <Link to= "/projects" className = "nav-link" >
           <FontAwesomeIcon icon="brain"/>
           <span className = "link-text" >projects</span>
           </Link>
       </li>
       <li className = "nav-item">
           <Link to= "/resume" className = "nav-link" >
           <FontAwesomeIcon icon="skull-crossbones"/>
           <span className = "link-text" >Resume</span>
           </Link>
       </li>
    </ul>   
</nav>

        )    

    }
export default Navbar