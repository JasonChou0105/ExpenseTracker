import { configureStore } from "@reduxjs/toolkit";
import expansesReducer from "./expanses"
import dateReducer from "./date" 

export const store = configureStore({
  reducer: {
    expanses: expansesReducer,
    date: dateReducer
  },
});
