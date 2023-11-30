import {combineReducers, configureStore} from '@reduxjs/toolkit';
import blogReducer from '../reducers/blogSlice';
import newsReducer from '../reducers/newsSlice';

const rootReducer = combineReducers({
    blogReducer,
    newsReducer
});

const store = configureStore({
    reducer:rootReducer
});

export default store;