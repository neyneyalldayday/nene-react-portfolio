import React from 'react'
import FuturePage from '../components/FuturePage'
import { FutureData } from '../data/FutureData'

const Future = () => {
    return (
        <div>
            <FuturePage {...FutureData} />
        </div>
    )
}

export default Future
