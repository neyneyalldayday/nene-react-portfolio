import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Socials() {
    return (
        <div class="card">
            <div className="card-content">
            <section >
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="caravan" />
            <Link to={{ pathname:"https://www.linkedin.com/in/rene-trevino-236058169/"}} target="_blank">Linkedin</Link>                    
            <span className = "link-text" >Home</span>
            </li>
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="biohazard" />
            <Link to={{ pathname:"https://github.com/neyneyalldayday"}} target="_blank">GitHub</Link>                   
            <span className = "link-text" >Home</span>
            </li>
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="glass-cheers" />
            <Link to={{ pathname:"https://wwww.drfrankenstein123@gmail.com"}} target="_blank">Email</Link>         
            <span className = "link-text" >Home</span>
            </li>             
               
                    
            </section>
         </div>   
            
        </div>
    )
}

export default Socials
