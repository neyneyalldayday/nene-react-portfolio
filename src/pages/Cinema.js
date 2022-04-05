import React from 'react'
import CinemaPage from '../components/CinemaPage'
import { CinemaData } from '../data/cinemaData'

const Cinema = () => {
    return (
        <div>
            <CinemaPage slides={ CinemaData} />
        </div>
    )
}

export default Cinema
