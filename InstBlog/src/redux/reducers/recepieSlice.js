import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    recepies:{}
}

export const recepieSlice = createSlice({
    name:"recepie",
    initialState,
    reducers:{
        getRecepie: (state, action) => {
            const recepie = action.payload;
            return {
                ...state,
                recepies:recepie
            }
        }
    }
});

export const {getRecepie} = recepieSlice.actions;

export default recepieSlice.reducer;