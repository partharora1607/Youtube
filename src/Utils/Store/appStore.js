import { configureStore } from "@reduxjs/toolkit";
import VedioReducer from "./Slice/vedioSlice";

const appStore = configureStore({
  reducer: {
    vedio: VedioReducer,
  },
});

export default appStore;
