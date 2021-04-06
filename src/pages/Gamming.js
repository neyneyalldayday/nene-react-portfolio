import React from 'react'
import GammingPage from '../components/GammingPage'
import {GammingData} from '../data/GammingData'

const Gamming = () => {
    return (
        <div>
            <GammingPage slides={ GammingData }/>
        </div>
    )
}

export default Gamming
