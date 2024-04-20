import { createSlice } from "@reduxjs/toolkit";
const movieSlice= createSlice({
    name:'movieSlice',
    initialState:{
        movieList:[],
        popularList:[],
        trendyList:[],
        trendyTVList:[],
        mainMovie:null
    },
    reducers:{
        addMoviesList:(state,action)=>{
            state.movieList=action.payload;
        },
        addPopularList:(state,action)=>{
            state.popularList=action.payload;
        },
        addTrendyList:(state,action)=>{
            state.trendyList=action.payload;
        },
        addTrendyTVList:(state,action)=>{
            state.trendyTVList=action.payload;
        },
        addMainMovie:(state,action)=>{
            state.mainMovie=action.payload;
        },

        removeMovieList:(state,action)=>{
            state.movieList=[];
        },
        removePopularList:(state,action)=>{
            state.popularList=[];
        },
        removeTrendyList:(state,action)=>{
            state.trendyList=[];
        },
        removeTrendyTVList:(state,action)=>{
            state.trendyTVList=[];
        },
        removeMainMovie:(state,action)=>{
            state.mainMovie=null;
        }
    }
})
export const {addMoviesList,addMainMovie,addPopularList,addTrendyList,addTrendyTVList,removeMovieList,removeMainMovie,removePopularList,removeTrendyList,removeTrendyTVList}= movieSlice.actions;
export default movieSlice.reducer;