import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Add new message to the end of messages array
      state.messages.push(action.payload);

      // Limit messages array to a maximum of 10 messages
      if (state.messages.length > 10) {
        state.messages = state.messages.slice(-10); // Keep the last 10 messages
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
