import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from './components/LogIn';
import Browse from './components/Browse';
import Header from './components/Header';
import { Provider, useDispatch } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import { useState } from 'react';
import GptSearch from './components/GptSearch';

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
    },
    {
      path:"/gptSerach",
      element:<GptSearch/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
