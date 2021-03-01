import React from 'react'
import { RealData } from '../data/RealData'
import Real from '../components/Real'

const RealEstate = () => {
    return (
        <div>
            <Real {...RealData} />
        </div>
    )
}

export default RealEstate
