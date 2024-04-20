import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import {  signOut } from "firebase/auth";
import { useState } from 'react';
import { addUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { Language, NetFlix_LOGO } from '../utils/constants';
import { toggleGptState } from '../utils/gptSlice';
import { changeLang } from './langSlice';
const Header = () => {
  // const user=auth.currentUser;
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const onGpt=useSelector(store=>store.gpt.onGPT);
  const lang=useSelector(store=>store.language.lang);
  // for signIN and signOut
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        dispatch(addUser({name:user.displayName,photoURL: user.photoURL, email : user.email, uid : user.uid}));
        onGpt?navigate("/gptSerach"):navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        if(onGpt){
          dispatch(toggleGptState());
          dispatch(changeLang('en'));
        }
        navigate("/");
      }
    });
    return ()=>{
      unsubscribe();
    }
  },[onGpt]);


  return (
    <header className='m-0 absolute top-0 left-0  pt-2 px-3 w-full h-[15vh] flex justify-between z-20  bg-gradient-to-b from-black to-transparent pb-5'>
        
        <img src={NetFlix_LOGO}></img>
        
        {user?<div className='w-[40vw] flex justify-between'>

          {onGpt?
          <select className='bg-red-500 text-white px-1 rounded-sm' onChange={(e)=>{
            dispatch(changeLang(e.target.value));
            console.log("lang");
          }}>
            <option value={'en'} className='bg-white text-black' >English</option>
            <option value={'hi'} className='bg-white text-black' >Hindi</option>
            <option value={'sans'} className='bg-white text-black' >Sanskrit</option>
          </select>:<></>}


          <div className='bg-red-600 px-3 pt-2 font-semibold rounded-sm text-white cursor-pointer' onClick={()=>{
            navigate("/gptSerach");
            dispatch(toggleGptState());
          }}>{onGpt?Language[lang].gptBtn :"GPT Search"}</div>


          <img src={user.photoURL} alt='hello' className='h-[30px] w-[30px] rounded-full'></img>
          <span className=' font-semibold text-white'>{user?.name}</span>
          
          <div className='bg-red-600 text-white text-center text-sm pt-2 p-1  rounded-sm cursor-pointer' onClick={()=>{

            signOut(auth).then(() => {
              dispatch(removeUser());
            }).catch((error) => {
              console.log(error);
            });

          }}>{Language[lang].signbtn}</div>

        </div>:<></>}
    </header>
  )
}

export default Header