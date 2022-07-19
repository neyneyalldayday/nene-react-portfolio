import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation  } from "react-router-dom";




                 

    const Navbar = ({ toggle }) =>  {
        const [navbar, setNavbar] = useState(false);
        const location = useLocation();
        
        const changeBackground = () => {
            if (window.pageYOffset >= 60) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        useEffect(() => {
            const watchScroll = () => {
                window.addEventListener('scroll', changeBackground);
            };

            watchScroll();

            return () => {
                window.removeEventListener('scroll', changeBackground);
            }
        }, []);

        let style = {
            backgroundColor:
            navbar || location.pathname !== '/' ?   'transparent' :  '#21213d'  ,
            transition: '0.4s'
        }
 
        return(
<nav className = "navbar"  style={style}> 
  <i className= "menu-bars" onClick={toggle}></i>           
    <ul className = "navbar-nav">
        <li className="logo">          
             <br />
             <FontAwesomeIcon icon="beer"/>
             <span className="link-text">N-N ALL D-D</span>             
        </li>
        <li className = "nav-item">
          <Link to= "/" className = "nav-link" >
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
           <Link to= "/projectpage" className = "nav-link" >
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

    );    

};
export default Navbar