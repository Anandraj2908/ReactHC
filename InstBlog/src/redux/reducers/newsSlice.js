import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    newsList:{}
}

export const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        getNews:(state,action) => {
            const newsL = action.payload;
            return {
                ...state,
                newsList:newsL
            
            }
        },
        clearNews:(state,action) => {
            return {
                newsList:{}
            }
        }

    }
});

export const {getNews,clearNews} = newsSlice.actions;

export default newsSlice.reducer;