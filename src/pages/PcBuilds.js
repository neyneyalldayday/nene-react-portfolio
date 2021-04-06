import React from 'react'
import PcBuildsPage from '../components/PcBuildsPage'
import { PcBuildData } from '../data/PcBuildData'

const PcBuilds = () => {
    return (
        <PcBuildsPage slides={PcBuildData} />
    )
}

export default PcBuilds
