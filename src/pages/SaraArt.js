import React from 'react'
import Art from '../components/Art'
import {ArtData} from '../data/ArtData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const SaraArt = () => {
  return (
    <>
    <Art {...ArtData}/> 
    </>
   
  )
}

export default SaraArt