import React from 'react'
import { CDN_URL } from '../utils/constants'

const MovieCard = ({image,id,altName}) => {
  // console.log(CDN_URL+image);
  return (
    <div className='min-w-40 h-52'>
        <img className='w-full h-full bg-white' src={CDN_URL+image} alt={altName}></img>
    </div>
  )
}

export default MovieCard