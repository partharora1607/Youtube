import { createSlice } from "@reduxjs/toolkit";

const vedioSlice = createSlice({
  name: "vedio",
  initialState: {
    vedioList: [],
  },
  reducers: {
    addVedios: (state, action) => {
      state.vedioList.push(...action.payload);
    },
  },
});

export const { addVedios } = vedioSlice.actions;

export default vedioSlice.reducer;
