import React from 'react'
import Wurk from '../components/Wurk'
import {RealDataFour} from '../data/RealDataFour'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const WorkOut = () => {
    return (
        <div>
            <Wurk {...RealDataFour} />
            <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="dumbbell" />
                <Link to={{ pathname:"https://limitless-hamlet-03137.herokuapp.com/?id=5fbaa8d0efd48b001768c5e2"}} target="_blank">Workout Tracker</Link> 
                <br></br>        
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/trackmyworkouts"}} target="_blank">Repository</Link>         
             </li>                  
        </div>
    )
}

export default WorkOut
