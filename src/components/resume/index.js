import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume() {
    return (
        <div className="card">
            <div className="card-content">
            <article>
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="skull-crossbones" />
            <Link to={{ pathname:"https://docs.google.com/document/d/1weVT8Ctucsou5P4TQ2fi1gufxnHgmeu-LBt4XxO_ldQ/edit"}} target="_blank">Resume</Link>
             </li>
            </article>
           </div> 
        </div>
    )
}

export default Resume
