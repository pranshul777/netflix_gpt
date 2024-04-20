import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
const SecondaryPage = () => {
    const showList=useSelector(store=>store.movies);
  return (
    <div className='bg-black min-h-[500vh] w-full'>
        <div className=' absolute mt-[-100px] z-10 w-full bg-transparent'>    
            <div className='scroll flex space-x-3 px-5 py-3 overflow-x-scroll'>{
                showList.movieList.map(movies=><MovieCard image={movies.poster_path} id={movies.id} key={movies.id}/>)
            }</div>
            <div className='font-semibold pl-8 text-white text-2xl'>Most Popular</div>
            <div className='scroll flex space-x-3 px-5 py-3 overflow-x-scroll'>{
                showList.popularList.map(movies=><MovieCard image={movies.poster_path} id={movies.id} key={movies.id}/>)
            }</div>
            <div className='font-semibold pl-8 text-white text-2xl'>Trending</div>
            <div className='scroll flex space-x-3 px-5 py-3 overflow-x-scroll'>{
                showList.trendyList.map(movies=><MovieCard image={movies.poster_path} id={movies.id} key={movies.id}/>)
            }</div>
            <div className='font-semibold pl-8 text-white text-2xl'>Trending Tv Shows</div>
            <div className='scroll flex space-x-3 px-5 py-3 overflow-x-scroll'>{
                showList.trendyTVList.map(movies=><MovieCard image={movies.poster_path} id={movies.id} key={movies.id}/>)
            }</div>
        </div>
    </div>
  )
}

export default SecondaryPage