import React, { useState } from 'react'

const LogIn = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [pswd,setPswd]=useState("");
    let [conPswd,setConPswd]=useState("");
  return (
    <div className=' bg-slate-300 w-full h-[100vh] bg-b'>
        <header className=' absolute top-0 left-0  pt-2 pl-3 w-full h-[20vh] flex justify-start z-10'>
            <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
        </header>
        <img className='relative w-full h-[150vh] brightness-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
        <div className='absolute top-28 left-80 w-[40%] min-h-[120vh] flex flex-col p-12 space-y-5 text-white backdrop-opacity-10 backdrop-invert bg-black/75'>
            <div className='font-bold text-3xl text-white'>{isSignIn?"Sign In" :" Sign Up"}</div>
            <form className='flex flex-col space-y-3'>
                {!isSignIn?<input className='p-3 bg-black rounded-sm border border-white' type='text' placeholder='Name' value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}></input>:<></>}
                <input className='p-3 bg-black rounded-sm border border-white' type='text' placeholder='Email or Phone' value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}></input>
                <input className='p-3 bg-black rounded-sm border border-white' type='password' placeholder='Password' value={pswd} onChange={(e)=>{
                    setPswd(e.target.value);
                }}></input>
                {!isSignIn?<input className='p-3 bg-black rounded-sm border border-white' type='password' placeholder='Confirm Password' value={conPswd} onChange={(e)=>{
                    setConPswd(e.target.value);
                }}></input>:<></>}
                <div className='text-center cursor-pointer py-2 px-5 bg-red-600'>{isSignIn?"Sign In" :" Sign Up"}</div>
            </form>
            {
                isSignIn?
                <div className='text-sm text text-slate-200 flex'>
                    New to Netflix?<div className='text-sm text-slate-200 cursor-pointer' onClick={()=>{
                        isSignIn?setIsSignIn(false):setIsSignIn(true);
                        setName("");
                        setConPswd("");
                        setEmail("");
                        setPswd("");
                    }}>Sign up now.</div>
                </div>
                :<div className='text-sm text-slate-200 cursor-pointer' onClick={()=>{
                    isSignIn?setIsSignIn(false):setIsSignIn(true);
                    setName("");
                    setConPswd("");
                    setEmail("");
                    setPswd("");
                }}>Sign In</div>
            }
        </div>
    </div>
  )
}

export default LogIn