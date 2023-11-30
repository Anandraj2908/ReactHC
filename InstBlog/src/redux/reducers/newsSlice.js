import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    newsList:[{
        id:nanoid(),
        articlesList:[
            {
                source:"CNN",
                author:"Anand",
                title:"News 1",
                description:"News 1 Description",
            },
            {
                source:"ABP",
                author:"Anand Raj",
                title:"News 2",
                description:"News 2 Description",
            }
        ]
    }
    ]
}

export const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        getNews:(state,action) => {
            const blog = {
                id:nanoid(),
                articlesList:action.payload
            }
            state.blogs.push(blog)
        },
        clearNews:(state,action) => {
            state.blogs = []
        }

    }
});

export const {getNews,clearNews} = newsSlice.actions;

export default newsSlice.reducer;