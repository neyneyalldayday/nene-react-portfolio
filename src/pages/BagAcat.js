import React from 'react'
import Cat from '../components/Cat'
import { RealDataTwo } from '../data/RealDataTwo'


const BagAcat = () => {
    return (
        <div>
            <Cat {...RealDataTwo} />               
        </div>
    )
}

export default BagAcat
