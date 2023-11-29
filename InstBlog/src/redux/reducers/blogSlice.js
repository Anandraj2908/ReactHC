import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    blogs:[
        
    ]
}

export const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{
        addQuote:(state,action) => {
            const blog = {
                id:nanoid(),
                content:action.payload
            }
            state.blogs.push(blog)
        },
        removeQuote:(state,action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload.id)
        }
    }
});

export const {addQuote,removeQuote} = blogSlice.actions;

export default blogSlice.reducer;