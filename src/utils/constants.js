import { GoogleGenerativeAI } from "@google/generative-ai";
export const NetFlix_LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NetFlix_BackGround="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const User_logo="https://lh3.googleusercontent.com/a/ACg8ocIOIOqn01x-1nZV2iMA87sRbQtJR-78ZI0YDCrCC8wdjjHEANA=s519-c-no";


export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+process.env.REACT_APP_TMDB_API_KEY
  }
};
export const MovieList_API_URL= 'https://api.themoviedb.org/3/movie/now_playing?include_adult=true&page=1';
export const MovieListPopular_API_URL= 'https://api.themoviedb.org/3/movie/popular?include_adult=true&page=1';
export const MovieListTopRated_API_URL= 'https://api.themoviedb.org/3/movie/top_rated?include_adult=true&page=1';
export const TVListTrendy_API_URL='https://api.themoviedb.org/3/trending/tv/day??include_adult=true';
export const Movie_Videos_API='https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';
export const CDN_URL='https://media.themoviedb.org/t/p/w440_and_h660_face';

export const Language={
  'en':{
    searchTxt:"what would you like to search today",
    searchSymbol : 'Get',
    gptBtn : "Home",
    signbtn: "Sign Out"
  },
  'hi':{
    searchTxt:"आज आप क्या देखना चाहेंगे?",
    searchSymbol : 'पाये',
    gptBtn : "घर",
    signbtn:"साइन आउट"
  },
  'sans':{
    searchTxt:"अद्य भवन्तः किं द्रष्टुम् इच्छन्ति",
    searchSymbol : 'प्राप्नोतु',
    gptBtn : "गृहम्‌",
    signbtn:"साइन आउट इति"
  }
}
export const MULTI_SEARCH_API='https://api.themoviedb.org/3/search/multi?include_adult=true&language=en-US&page=1&query=';

export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_Gemini_AI_KEY);