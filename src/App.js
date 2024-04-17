import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from './components/LogIn';
import Browse from './components/Browse';
import { Provider, useDispatch } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { addUser } from './utils/userSlice';
import { useState } from 'react';

function App() {
  const dispatch=useDispatch();
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<LogIn/>
    },
    {
      path:"/Browse",
      element:<Browse/>
    }
  ])

  useState(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(addUser({name:user.displayName, email : user.email, uid : user.uid}));
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[]);


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
