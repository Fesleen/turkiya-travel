import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../api/api";

const TOKEN = '5908429213:AAE2B7pxvOmAD0_Jeb44x9_z_rjeduBWP0E';
const CHAT_ID = '-4173926499';

export const PostContact = createAsyncThunk("contact/post", async (body) => {
  const info = `Имя : ${body.email} %0AНомер телефона: ${body.phone}`;
  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`);
  return await axios.post(`${API_URL}/Contacts`, body).then((res) => res.data);
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
