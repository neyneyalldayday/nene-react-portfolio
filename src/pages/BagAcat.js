import React from 'react'
import Cat from '../components/Cat'
import { RealDataTwo } from '../data/RealDataTwo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BagAcat = () => {
    return (
        <div>
            <Cat {...RealDataTwo} />
            <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="hamburger" />
                    <Link to={{ pathname:"https://bag-a-cat.herokuapp.com/"}} target="_blank">A mock real estate app</Link>
                    <br></br>                    
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/Bag-a-Cat"}} target="_blank">Repository</Link>                    
                 </li>
        </div>
    )
}

export default BagAcat
