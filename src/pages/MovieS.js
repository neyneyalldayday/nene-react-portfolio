import React from 'react'
import SearchMovies from '../components/searchMovies'
import { MovieData } from '../data/MovieData'

const MovieS = () => {
  return (
    <SearchMovies {...MovieData} />
  )
}

export default MovieS