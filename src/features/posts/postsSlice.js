import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    allPosts: [],
    status: "idle", // "idle" | "loading" | "success" | "fail"
    error: null
};

const POSTS_URL = "http://localhost:8001/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async() => {
    const response = await fetch(POSTS_URL);
    return await response.json();
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success";
                state.allPosts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const selectAllPosts = state => state.posts.allPosts;
export const getPostsStatus = state => state.posts.status;
export const getPostsError = state => state.posts.error;
export default postsSlice.reducer;
