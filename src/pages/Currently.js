import React from 'react'
import Current from '../components/Current'
import { CurrentData } from '../data/CurrentData'

const Currently = () => {
    return (
        <div>
            <Current {...CurrentData} />
        </div>
    )
}

export default Currently
