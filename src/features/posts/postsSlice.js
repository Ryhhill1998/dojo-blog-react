import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    allPosts: [],
    status: "idle", // "idle" | "pending" | "success" | "fail"
    error: null
};

const POSTS_URL = "http://localhost:8001/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async() => {
    const response = await fetch(POSTS_URL);
    return await response.json();
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async(post) => {
    const response = await fetch(POSTS_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    });

    return await response.json();
});

export const deletePost = createAsyncThunk("posts/deletePost", async(id) => {
    await fetch(POSTS_URL + "/" + id, {
        method: "DELETE"
    });

    return id;
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const {title, content, author} = action.payload;

            const newPost = {
                id: nanoid(),
                title,
                content,
                author
            };

            state.allPosts.push(newPost);
        },
        deletePost: (state, action) => {
            const id = action.payload;
            state.allPosts = state.allPosts.filter(post => post.id !== id);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success";
                state.allPosts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "fail";
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.status = "idle";
                state.allPosts.push(action.payload);
                console.log("adding new post")
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = "idle";
                state.allPosts = state.allPosts.filter(post => post.id !== action.payload);
            })
    }
});

export const selectAllPosts = state => state.posts.allPosts;
export const getPostsStatus = state => state.posts.status;
export const getPostsError = state => state.posts.error;
export default postsSlice.reducer;
