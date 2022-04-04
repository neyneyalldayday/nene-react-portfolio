import React from 'react'
import { RealData } from '../data/RealData'
import Real from '../components/Real'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const RealEstate = () => {
    return (
        <div>
            <Real {...RealData} />
            <li  className = "nav-item" id="nav-item">
                 <FontAwesomeIcon icon="hamburger" />
                    <Link to={{ pathname:"https://real-estate-react-mock.herokuapp.com/"}} target="_blank">A mock real estate app</Link>
                    <br></br>                    
                <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/realEstatereact"}} target="_blank">Repository</Link>                    
                 </li>
        </div>
    )
}

export default RealEstate
