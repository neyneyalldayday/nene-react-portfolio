import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


                 
export const Navbar = () => (
<nav className = "navbar">
    <ul className = "navbar-nav">
        <li className="logo">
            <a href="#" className="nav-link">
            <FontAwesomeIcon icon="dice-d20"/>
            <span className="link-text">N-N ALL D-D</span>   
            </a>
        </li>
       <li className = "nav-item">
           <a href = "/Home" className = "nav-link" >
           <FontAwesomeIcon icon="house-user" />           
           <span className = "link-text" >Home</span>
           </a>
       </li>
       <li className = "nav-item">
           <a href = "/AboutMe" className = "nav-link" >
           <FontAwesomeIcon icon="cat" />           
           <span className = "link-text" >About Me</span>
           </a>
       </li>
       <li className = "nav-item">
           <a href = "/Socials" className = "nav-link" >
           <FontAwesomeIcon icon="biking" />
           <span className = "link-text" >Socials</span>
           </a>
       </li>
       <li className = "nav-item">
           <a href = "/Projects" className = "nav-link" >
           <FontAwesomeIcon icon="brain"/>
           <span className = "link-text" >projects</span>
           </a>
       </li>
    </ul>
</nav>
)



// function Navbar() {
//     return (
//         <div className="Navbar">
            
//         </div>
//     )
// }

// export default index




export default Navbar