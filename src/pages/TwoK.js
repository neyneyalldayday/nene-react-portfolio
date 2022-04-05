import React from 'react'
import NbaTwoK from '../components/NbaLyfe'
import { BasketBallData } from '../data/BasketBallData'

const TwoK = () => {
  return (
    <>
    <NbaTwoK {...BasketBallData} />   
    </>
   
  )
}

export default TwoK