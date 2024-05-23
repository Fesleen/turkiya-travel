import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const HeroGet = createAsyncThunk("hero/get", async () => {
  const response = await axios.get("http://localhost:8000/Hero");
  return response.data;
});

const HeroSlice = createSlice({
  name: "hero",
  initialState: {
    heroGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HeroGet.pending, (state) => {
        state.heroGet.loading = true;
      })
      .addCase(HeroGet.fulfilled, (state, action) => {
        state.heroGet.loading = false;
        state.heroGet.success = true;
        state.heroGet.data = action.payload;
        state.heroGet.error = false;
      })
      .addCase(HeroGet.rejected, (state) => {
        state.heroGet.loading = false;
        state.heroGet.error = true;
        state.heroGet.success = false;
      });
  },
});

export default HeroSlice.reducer;
