import React, { useEffect, useState } from 'react'
import Header from './Header'
import { API_Options, MovieListPopular_API_URL, MovieListTopRated_API_URL, MovieList_API_URL, TVListTrendy_API_URL } from '../utils/constants';
import { useDispatch,useSelector } from 'react-redux';
import { addMoviesList,addMainMovie, addPopularList, addTrendyList, addTrendyTVList } from '../utils/movieSlice';
import MainVideo from './MainVideo';
import SecondaryPage from './SecondaryPage';
const Browse = () => {
  let [flag1,setFlag1]=useState(0);
  let [flag2,setFlag2]=useState(0);
  let [flag3,setFlag3]=useState(0);
  let [flag4,setFlag4]=useState(0);
  let [flag5,setFlag5]=useState(0);
  const dispatch=useDispatch();

  async function callMovieAPI(){
    try{
      const res=await fetch(MovieList_API_URL, API_Options);
      const json=await res.json();
      // console.log(json);
      dispatch(addMoviesList(json?.results));
      dispatch(addMainMovie(json?.results[0]));
      setFlag1(flag1+1);
    }
    catch(err){
      console.error('error:' + err);
    }
  }
  async function callPopularMovieAPI(){
    try{
      const res=await fetch(MovieListPopular_API_URL, API_Options);
      const json=await res.json();
      // console.log(json);
      dispatch(addPopularList(json?.results));
      setFlag2(flag2+1);
    }
    catch(err){
      console.error('error:' + err);
    }
  }
  async function callTrendyMovieAPI(){
    try{
      const res=await fetch(MovieListTopRated_API_URL, API_Options);
      const json=await res.json();
      // console.log(json);
      dispatch(addTrendyList(json?.results));
      setFlag3(flag3+1);
    }
    catch(err){
      console.error('error:' + err);
    }
  }
  async function callTrendyTVAPI(){
    try{
      const res=await fetch(TVListTrendy_API_URL, API_Options);
      const json=await res.json();
      // console.log(json);
      dispatch(addTrendyTVList(json?.results));
      setFlag4(flag4+1);
    }
    catch(err){
      console.error('error:' + err);
    }
  }
  useEffect(()=>{
    callMovieAPI();
    callPopularMovieAPI();
    callTrendyMovieAPI();
    callTrendyTVAPI();
  },[]);
  // console.log(flag1);
  // console.log(flag2);
  // console.log(flag3);
  // console.log(flag4);
  return (
    <>
    <Header/>
    <div className='w-full'>
      <>
      {flag1?<MainVideo/>:<></>}
      {flag3&&flag2&&flag4?<SecondaryPage/>:<></>}
      </>
    </div>
    </>
  )
}

export default Browse