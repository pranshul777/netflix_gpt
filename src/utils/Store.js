import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
const Store=configureStore({
    reducer:{
        user : userSlice,
        movies: movieSlice
    }
})
export default Store;