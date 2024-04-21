import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Title,showList}) => {
  return (
    <div className='w-full'>
        <div className='font-semibold pl-8 text-white text-2xl'>{Title}</div>
        <div className='scroll flex space-x-3 px-5 py-3 overflow-x-scroll'>{
            showList?.map(movies=><MovieCard image={movies.poster_path} id={movies.id} key={movies.id} altName={movies.name}/>)
        }</div>
    </div >
  )
}

export default MovieList