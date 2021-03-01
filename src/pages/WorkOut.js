import React from 'react'
import Wurk from '../components/Wurk'
import {RealDataFour} from '../data/RealDataFour'

const WorkOut = () => {
    return (
        <div>
            <Wurk {...RealDataFour} />
        </div>
    )
}

export default WorkOut
