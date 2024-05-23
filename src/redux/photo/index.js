import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const PhotoGet = createAsyncThunk(
    "photo/get", async () => {
        return await axios.get('http://localhost:8000/Photo')
            .then(res => res.data)
    })
  
  const PhotoSlice = createSlice({
    name: "photo",
    initialState: {
        photoGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(PhotoGet.pending, (state, action) => {
                state.photoGet.loading = true
            })
            .addCase(PhotoGet.fulfilled, (state, action) => {
                state.photoGet.loading = false;
                state.photoGet.success = true;
                state.photoGet.data = action.payload;
                state.photoGet.error = false;
            })
            .addCase(PhotoGet.rejected, (state, action) => {
                state.photoGet.loading = false;
                state.photoGet.error = true;
                state.photoGet.success = false;
            })
    }
  })
  
  export const {} = PhotoSlice.actions;
  export default PhotoSlice.reducer;
  