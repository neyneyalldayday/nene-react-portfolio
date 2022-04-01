import React from 'react'
import Bakery from '../components/Bakery'
import { BakeData } from '../data/BakeData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Sherry = () => {
  return (
    <>
     <Bakery {...BakeData}/>
   <li  className = "nav-item" id="nav-item">
    <FontAwesomeIcon icon="hamburger" />
       <Link to={{ pathname:"https://katys-bakery-dh29m58jx-neyneyalldayday.vercel.app/"}} target="_blank">visit the app!!</Link>                           
    </li>
    <br></br>
    <li className="nav-item" id="nav-item">
    <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/Katys-bakery"}} target="_blank">Visit the Repository</Link> 
    </li>
    </>
  
  )
}

export default Sherry