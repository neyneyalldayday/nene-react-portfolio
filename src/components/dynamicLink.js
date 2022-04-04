import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DynamicLink = () => {
  return (
    <li  className = "nav-item" id="nav-item">
    <FontAwesomeIcon icon="hamburger" />
       <Link to={{ pathname:""}} target="_blank">A mock real estate app</Link>
       <br></br>                    
   <Link className="repository" to={{ pathname:""}} target="_blank">Repository</Link>                    
    </li>
  )
}

export default DynamicLink