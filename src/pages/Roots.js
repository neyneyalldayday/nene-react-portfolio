import React from 'react'
import RootsPage from '../components/RootsPage'
import { RootsData } from '../data/RootsData'

const Roots = () => {
    return (
        <div>
            <RootsPage {...RootsData} />
        </div>
    )
}

export default Roots
