import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearch : (state)=>{ //no need of action jsut toggling
            state.showGptSearch=!state.showGptSearch;
        } 
    },
})
export const {toggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;