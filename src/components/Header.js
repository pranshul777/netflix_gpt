import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import {  signOut } from "firebase/auth";
import { useState } from 'react';
import { addUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { NetFlix_LOGO } from '../utils/constants';
const Header = () => {
  // const user=auth.currentUser;
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        dispatch(addUser({name:user.displayName,photoURL: user.photoURL, email : user.email, uid : user.uid}));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>{
      unsubscribe();
    }
  },[]);


  return (
    <header className='m-0 absolute top-0 left-0  pt-2 px-3 w-full h-[15vh] flex justify-between z-20  bg-gradient-to-b from-black to-transparent pb-5'>
        <img src={NetFlix_LOGO}></img>
        
        {user?<div className='w-[20vw] flex justify-between'>
          <img src={user.photoURL} alt='hello' className='h-[30px] w-[30px] rounded-full'></img>
          <span className=' font-semibold text-white'>{user?.name}</span>
          <div className='bg-red-600 text-white text-center text-sm pt-2 p-1  rounded-sm cursor-pointer' onClick={()=>{

            signOut(auth).then(() => {
              dispatch(removeUser());
            }).catch((error) => {
              console.log(error);
            });


          }}>Sign Out</div>
        </div>:<></>}
    </header>
  )
}

export default Header