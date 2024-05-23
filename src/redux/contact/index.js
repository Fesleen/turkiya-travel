import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios"
  
  
  export const ContactPost = createAsyncThunk(
    "contact/post", async () => {
        return await axios.post('http://localhost:8000/Contact')
            .then(res => res.data)
    })
  
  const ContactSlice = createSlice({
    name: "contact",
    initialState: {
        contactPost: {
            loading: false,
            data: [],
            error: false,
            success: false,
        }
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(ContactPost.pending, (state, action) => {
                state.contactPost.loading = true
            })
            .addCase(ContactPost.fulfilled, (state, action) => {
                state.contactPost.loading = false;
                state.contactPost.success = true;
                state.contactPost.data = action.payload;
                state.contactPost.error = false;
            })
            .addCase(ContactPost.rejected, (state, action) => {
                state.contactPost.loading = false;
                state.contactPost.error = true;
                state.contactPost.success = false;
            })
    }
  })
  
  export const {} = ContactSlice.actions;
  export default ContactSlice.reducer;
  