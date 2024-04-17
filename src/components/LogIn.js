import React, { useState } from 'react'
import Header from './Header';
import { signInValidation, signUpValidation } from '../utils/validation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'firebase/auth';
const LogIn = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const [isSignIn,setIsSignIn]=useState(true);
    const [validationMessage,setValidationMessage]=useState("");
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [pswd,setPswd]=useState("");
    let [conPswd,setConPswd]=useState("");

    function validateData(){
        let message;
        if(isSignIn){
            message=signInValidation(email,pswd);
        }
        else{
            console.log(name);
            message=signUpValidation(name,email,pswd,conPswd);
        }
        setValidationMessage(message);
        if(message) return ;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email, conPswd)
            .then((userCredential) => {
                // Signed up 
                console.log("validation started");
                const user = userCredential.user;
                console.log(user);

                updateProfile(user, {displayName: name, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIOIOqn01x-1nZV2iMA87sRbQtJR-78ZI0YDCrCC8wdjjHEANA=s519-c-no"})
                    .then(() => {
                        const data=auth.currentUser;
                        dispatch(addUser({name:data.displayName,email:data.email, uid : user.uid}));
                    }).catch((error) => {
                        console.log(error);
                    });

                    
                setName("");
                setConPswd("");
                setEmail("");
                setPswd("");
                setIsSignIn(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setValidationMessage(errorCode+"-"+errorMessage);
            });
        }
        else if(isSignIn){
            signInWithEmailAndPassword(auth, email, pswd)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setValidationMessage(errorCode+"-"+errorMessage);
            });
        }
    }

  return (
    <div className=' bg-slate-300 w-full h-[100vh] bg-b'>
        <Header/>
        <img className='relative w-full h-[150vh] brightness-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
        <div className='absolute top-28 left-80 w-[40%] min-h-[120vh] flex flex-col p-12 space-y-5 text-white backdrop-opacity-10 backdrop-invert bg-black/75'>
            <div className='font-bold text-3xl text-white'>{isSignIn?"Sign In" :" Sign Up"}</div>
            
            <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col space-y-3'>
                {!isSignIn?<input className='p-3 bg-black rounded-sm border border-white' type='text' placeholder='Name' value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}></input>:<></>}
                <input className='p-3 bg-black rounded-sm border border-white' type='text' placeholder='Email' value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}></input>
                <input className='p-3 bg-black rounded-sm border border-white' type='password' placeholder='Password' value={pswd} onChange={(e)=>{
                    setPswd(e.target.value);
                }}></input>
                {!isSignIn?<input className='p-3 bg-black rounded-sm border border-white' type='password' placeholder='Confirm Password' value={conPswd} onChange={(e)=>{
                    setConPswd(e.target.value);
                }}></input>:<></>}

                <div className='text-sm font-semibold text-red-600 '>{validationMessage}</div>

                <div  className='text-center cursor-pointer py-2 px-5 bg-red-600' onClick={()=>{
                    setValidationMessage("");
                    validateData();
                }}>{isSignIn?"Sign In" :" Sign Up"}</div>
            </form>



            {isSignIn?
                <div className='text-sm text text-slate-200 flex'>
                    New to Netflix?<div className='text-sm text-slate-200 cursor-pointer' onClick={()=>{
                        isSignIn?setIsSignIn(false):setIsSignIn(true);
                        setName("");
                        setConPswd("");
                        setEmail("");
                        setPswd("");
                        setValidationMessage("");
                    }}>Sign up now.</div>
                </div>
                :<div className='text-sm text text-slate-200 flex'>
                    Already have an accounct?<div className='text-sm text-slate-200 cursor-pointer' onClick={()=>{
                        isSignIn?setIsSignIn(false):setIsSignIn(true);
                        setName("");
                        setConPswd("");
                        setEmail("");
                        setPswd("");
                        setValidationMessage("");
                    }}>Sign In</div>
                </div>
            }
        </div>
    </div>
  )
}

export default LogIn