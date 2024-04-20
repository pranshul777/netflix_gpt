import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_Options, Movie_Videos_API } from '../utils/constants';
const VideoTitle=()=>{
    const [overView,setOverView]=useState(true);
    const mainMovie= useSelector(store=>store.movies.mainMovie);
    return(
        <div className='absolute w-full h-full pl-12 flex flex-col space-y-5 pt-60 text-white  bg-gradient-to-r from-black to-transparent z-10' >
            <div className='font-bold text-3xl '>{mainMovie?.original_title}</div>
            {overView?<div className='flex flex-col space-y-3' >
                <div className='text-sm  w-1/3 '>{mainMovie?.overview}</div>
                <div className=' flex space-x-3'>
                    <div className='px-3 py-1 bg-white text-black text-lg font-semibold rounded-sm hover:bg-slate-200 hover:cursor-pointer '>Play Now</div>
                    <div className='px-3 py-1 bg-slate-600 text-white font-semibold rounded-sm hover:bg-slate-500 hover:cursor-pointer'>More Info</div>
                </div>
            </div>:<></>}
        </div>
    )
}
const MainVideo = () => {
    const [trailerVideo,setTrailerVideo]=useState({});
    const mainMovie= useSelector(store=>store.movies.mainMovie);
    async function mainVideoFetch(){
        fetch(`https://api.themoviedb.org/3/movie/${mainMovie?.id}/videos?language=en-US`, API_Options)
        .then(res => res.json())
        .then(json =>{
            //  console.log(json);
            
             setTrailerVideo(json?.results?.filter(item=>item.type==="Trailer")[1]);
            //  console.log(trailerVideo);
        })
        .catch(err => console.error('error:' + err));
    }
    useEffect(()=>{
        mainVideoFetch();
    },[])
    return (
        <div className='w-full relative'>
            <VideoTitle/>
            <iframe className=' top-0 w-full aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"} allow='autoplay'></iframe>
        </div>
    )
}

export default MainVideo
