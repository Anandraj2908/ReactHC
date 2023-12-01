import {combineReducers, configureStore} from '@reduxjs/toolkit';
import blogReducer from '../reducers/blogSlice';
import newsReducer from '../reducers/newsSlice';
import recepieReducer from '../reducers/recepieSlice';

const rootReducer = combineReducers({
    blogReducer,
    newsReducer,
    recepieReducer
});

const store = configureStore({
    reducer:rootReducer
});

export default store;