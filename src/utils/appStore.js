import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import userReducer from "./userSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies : moviesReducer,
        gpt:gptSlice
    }
})
export default appStore;   