import React from 'react'
import Art from '../components/Art'
import {ArtData} from '../data/ArtData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const SaraArt = () => {
  return (
    <>
    <Art {...ArtData}/>
   <li  className = "nav-item" id="nav-item">
   <FontAwesomeIcon icon="khanda" />
   <Link to={{ pathname:"https://vercel.com/neyneyalldayday/rangel-works/82NKZpAPsLJ9J5BG7embsQYLXqKM"}} target="_blank">Samurai Swap Meet</Link>
   <br></br>
   <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/rangel-works"}} target="_blank">Repository</Link>
   </li>
    </>
   
  )
}

export default SaraArt