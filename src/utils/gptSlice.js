import { createSlice } from "@reduxjs/toolkit";
const gptSlice= createSlice({
    name:'gptSlice',
    initialState:{
        onGPT:false,
        array : null
    },
    reducers:{
        toggleGptState : (state)=>{
            state.onGPT=!state.onGPT;
        },
        provideArray : (state,action)=>{
            state.array=action.payload;
        },
        removeArray : (state,action)=>{
            state.array=null;
        }
    }
})
export const {toggleGptState,provideArray}= gptSlice.actions;
export default gptSlice.reducer;