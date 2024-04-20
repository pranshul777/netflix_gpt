import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import langSlice from "../components/langSlice";
const Store=configureStore({
    reducer:{
        user : userSlice,
        movies: movieSlice,
        gpt : gptSlice,
        language : langSlice
    }
})
export default Store;