import { configureStore } from '@reduxjs/toolkit';

import postsReducer from "../features/posts/postsSlice.js";
import filtersReducer from "../features/filters/filtersSlice.js";

export default configureStore({
    reducer: {
        posts: postsReducer,
        filters: filtersReducer,
    }
});