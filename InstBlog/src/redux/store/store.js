import {configureStore} from '@reduxjs/toolkit';
import blogReducer from '../reducers/blogSlice';

const store = configureStore({
    reducer:blogReducer
});

export default store;