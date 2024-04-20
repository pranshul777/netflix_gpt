import React, { useState } from 'react'
import Header from './Header'
import { Language, NetFlix_BackGround } from '../utils/constants'
import { useSelector } from 'react-redux';

const GptSearch = () => {
    let [searchTxt,setSearchTxt]=useState("");
    const lang=useSelector(store=>store.language.lang);
  return (
    <>
    <Header/>
    <div className='w-full'>
        <img className='relative w-full h-[150vh] brightness-50' src={NetFlix_BackGround}></img>
        <div className='w-full absolute top-20 left-44 z-10 flex '>
            <input className='w-1/3 p-2 rounded-l-sm' value={searchTxt} type='text' placeholder={Language[lang].searchTxt} onChange={(e)=>setSearchTxt(e.target.value)} ></input>
            <div className='w-1/12 rounded-r-sm p-2 bg-red-600 flex justify-center font-semibold text-white cursor-pointer hover:bg-red-500'>{Language[lang].searchSymbol}</div>
        </div>
    </div>
    </>
  )
}

export default GptSearch