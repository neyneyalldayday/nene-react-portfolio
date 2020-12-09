import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const element = <FontAwesomeIcon icon = { faCat }/>
const Navbar = () => 
<nav className = "navbar">
    <ul className = "navbar-nav">
       <li className = "nav-item">
           <a href = "#" className = "nav-link" >
            <i className = "fas fa-cat" > </i>
            <span className = "link-text" > </span>
           </a>
       </li>
    </ul>
</nav>;


ReactDom.render(element, document.body);
export default Navbar