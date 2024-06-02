import { createSlice } from "@reduxjs/toolkit";

const vedioSlice = createSlice({
  name: "vedio",
  initialState: {
    vedioList: null,
  },
  reducers: {
    updateVedios: (state, action) => {
      state.vedioList = action.payload;
    },
  },
});

export const { updateVedios } = vedioSlice.actions;

export default vedioSlice.reducer;
