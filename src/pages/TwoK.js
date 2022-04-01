import React from 'react'
import NbaTwoK from '../components/NbaLyfe'
import { BasketBallData } from '../data/BasketBallData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const TwoK = () => {
  return (
    <>
    <NbaTwoK {...BasketBallData} />
   <li  className = "nav-item" id="nav-item">
   <FontAwesomeIcon icon="khanda" />
   <Link to={{ pathname:"https://nba2k2022-team-stats-archive2-5pqp6ncod-neyneyalldayday.vercel.app/"}} target="_blank">Samurai Swap Meet</Link>
   <br></br>
   <Link className="repository" to={{ pathname:"https://github.com/neyneyalldayday/nba2k2022TeamStatsArchive"}} target="_blank">Repository</Link>
   </li>
    </>
   
  )
}

export default TwoK