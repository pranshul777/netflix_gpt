import { createSlice } from "@reduxjs/toolkit";
const gptSlice= createSlice({
    name:'gptSlice',
    initialState:{
        onGPT:false,
    },
    reducers:{
        toggleGptState : (state)=>{
            state.onGPT=!state.onGPT;
        }
    }
})
export const {toggleGptState}= gptSlice.actions;
export default gptSlice.reducer;