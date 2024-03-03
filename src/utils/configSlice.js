import { createSlice } from "@reduxjs/toolkit";

const configSlicer = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload;
        }
    }
})
export const {changeLanguage} = configSlicer.actions;
export default configSlicer.reducer