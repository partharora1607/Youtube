import { configureStore } from "@reduxjs/toolkit";
import VedioReducer from "./Slice/vedioSlice";
import SearchReducer from "./Slice/searchSlice";
import chatReducer from "./Slice/chatSlice";

const appStore = configureStore({
  reducer: {
    vedio: VedioReducer,
    search: SearchReducer,
    chat: chatReducer,
  },
});

export default appStore;
