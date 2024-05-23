import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const PlacesGet = createAsyncThunk(
    "places/get", async () => {
        return await axios.get('http://localhost:8000/Places')
            .then(res => res.data)
    })
  
  const PlacesSlice = createSlice({
    name: "places",
    initialState: {
        placesGet: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(PlacesGet.pending, (state, action) => {
                state.placesGet.loading = true
            })
            .addCase(PlacesGet.fulfilled, (state, action) => {
                state.placesGet.loading = false;
                state.placesGet.success = true;
                state.placesGet.data = action.payload;
                state.placesGet.error = false;
            })
            .addCase(PlacesGet.rejected, (state, action) => {
                state.placesGet.loading = false;
                state.placesGet.error = true;
                state.placesGet.success = false;
            })
    }
  })
  
  export const {} = PlacesSlice.actions;
  export default PlacesSlice.reducer;
  