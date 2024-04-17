import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
const Header = () => {
  // const user=auth.currentUser;
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  // dispatch(removeUser());
  return (
    <header className=' absolute top-0 left-0  pt-2 px-3 w-full h-[10vh] flex justify-between z-10'>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
        {user?<div className='w-[20vw] flex justify-between'>
          <img src={user.photoURL} alt='hello' className='h-[30px] w-[30px] rounded-full'></img>
          <span className='text-black font-semibold'>{user?.name}</span>
          <div className='bg-red-600 text-white text-center text-sm pt-2 p-1 rounded-sm cursor-pointer' onClick={()=>{
            dispatch(removeUser());
            navigate("/");
          }}>Sign Out</div>
        </div>:<></>}
    </header>
  )
}

export default Header