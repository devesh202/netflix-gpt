import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import userReducer from "./userSlice";
import gptSlice from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies :moviesReducer,
        gpt:gptSlice,
        config: configReducer,
    }
})
export default appStore;   