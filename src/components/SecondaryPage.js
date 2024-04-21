import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import MovieList from './MovieList';
const SecondaryPage = () => {
    const showList=useSelector(store=>store.movies);
  return (
    <div className='bg-black min-h-[500vh] w-full'>
        <div className=' absolute mt-[-100px] z-10 w-full bg-transparent'>    
            <MovieList Title={""} showList={showList.popularList}/>
            <MovieList Title={"Most Popular"} showList={showList.popularList}/>
            <MovieList Title={"Top Rated"} showList={showList.trendyList}/>
            <MovieList Title={"Trending on TV"} showList={showList.trendyTVList}/>
        </div>
    </div>
  )
}

export default SecondaryPage