import { configureStore } from "@reduxjs/toolkit";
import VedioReducer from "./Slice/vedioSlice";
import SearchReducer from "./Slice/searchSlice";

const appStore = configureStore({
  reducer: {
    vedio: VedioReducer,
    search: SearchReducer,
  },
});

export default appStore;
