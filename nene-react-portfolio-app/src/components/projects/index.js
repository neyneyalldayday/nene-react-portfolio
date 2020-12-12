import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    
    Link
  } from "react-router-dom";

function Projects() {
    return (
        <div className="card">
            <div className="card-content">
            <section >
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="hamburger" />
            <Link to={{ pathname:"https://serene-brushlands-59187.herokuapp.com/"}} target="_blank">Eat da Burg Burg</Link>
            <br></br>                    
            <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/eat-Da-burg-burg"}} target="_blank">Repository</Link>                    
            </li>
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="khanda" />
            <Link to={{ pathname:"https://samuraiswapmeet.herokuapp.com/"}} target="_blank">Samurai Swap Meet</Link>
            <br></br>
            <Link className="repository" to={{ pathname:"https://github.com/rendod99/Project_2"}} target="_blank">Repository</Link>
            </li>
            <li className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="dumbbell" />
            <Link to={{ pathname:"https://limitless-hamlet-03137.herokuapp.com/?id=5fbaa8d0efd48b001768c5e2"}} target="_blank">Workout Tracker</Link> 
            <br></br>        
            <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/trackmyworkouts"}} target="_blank">Repository</Link>         
            </li>            
               
                    
            </section>


            </div>
            
        </div>
    )
}

export default Projects
