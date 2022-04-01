import React from 'react'
import Sam from '../components/Sam'
import {RealDataThree} from '../data/RealDataThree'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const SamauriSwap = () => {
    return (
        <div>
            <Sam {...RealDataThree} />
            <li  className = "nav-item" id="nav-item">
                <FontAwesomeIcon icon="khanda" />
                <Link to={{ pathname:"https://samuraiswapmeet.herokuapp.com/"}} target="_blank">Samurai Swap Meet</Link>
                <br></br>
                <Link className="repository" to={{ pathname:"https://github.com/rendod99/Project_2"}} target="_blank">Repository</Link>
                </li>
        </div>
    )
}

export default SamauriSwap
