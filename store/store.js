import { configureStore } from "@reduxjs/toolkit";
import expansesReducer from "./expanses"
export const store = configureStore({
  reducer: {
    expanses: expansesReducer
  },
});
