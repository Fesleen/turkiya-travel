import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const AboutUsGet = createAsyncThunk(
    "aboutUs/get", async () => {
        return await axios.get('http://localhost:8000/AboutUs')
            .then(res => res.data)
    })
  
  const AboutUsSlice = createSlice({
    name: "aboutUs",
    initialState: {
        aboutUsGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(AboutUsGet.pending, (state, action) => {
                state.aboutUsGet.loading = true
            })
            .addCase(AboutUsGet.fulfilled, (state, action) => {
                state.aboutUsGet.loading = false;
                state.aboutUsGet.success = true;
                state.aboutUsGet.data = action.payload;
                state.aboutUsGet.error = false;
            })
            .addCase(AboutUsGet.rejected, (state, action) => {
                state.aboutUsGet.loading = false;
                state.aboutUsGet.error = true;
                state.aboutUsGet.success = false;
            })
    }
  })
  
  export const {} = AboutUsSlice.actions;
  export default AboutUsSlice.reducer;
  