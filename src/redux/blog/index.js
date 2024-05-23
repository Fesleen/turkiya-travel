import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const BlogGet = createAsyncThunk(
    "blog/get", async () => {
        return await axios.get('http://localhost:8000/Blog')
            .then(res => res.data)
    })
  
  const BlogSlice = createSlice({
    name: "blog",
    initialState: {
        blogGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(BlogGet.pending, (state, action) => {
                state.blogGet.loading = true
            })
            .addCase(BlogGet.fulfilled, (state, action) => {
                state.blogGet.loading = false;
                state.blogGet.success = true;
                state.blogGet.data = action.payload;
                state.blogGet.error = false;
            })
            .addCase(BlogGet.rejected, (state, action) => {
                state.blogGet.loading = false;
                state.blogGet.error = true;
                state.blogGet.success = false;
            })
    }
  })
  
  export const {} = BlogSlice.actions;
  export default BlogSlice.reducer;
  