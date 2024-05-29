import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const TOKEN = '7236837279:AAH1eakMjF6ZClhKunEotfyHVRI3cDlNgVU';
const CHAT_ID = '-1002152542741';

export const PostContact = createAsyncThunk("contact/post", async (body) => {
  const info = `Name : ${body.name} %0ATelephone: ${body.phone}  %0ATelephone: ${body.email}`;
  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`);
});

const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    postContact: {
      Error: false,
      Success: false,
      Loading: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostContact.pending, (state) => {
        state.postContact.Loading = true;
      })
      .addCase(PostContact.fulfilled, (state) => {
        state.postContact.Loading = false;
        state.postContact.Success = true;
        state.postContact.Error = false;
      })
      .addCase(PostContact.rejected, (state) => {
        state.postContact.Error = true;
        state.postContact.Success = false;
        state.postContact.Loading = false;
      });
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
