import { createSlice } from "@reduxjs/toolkit";
import Expanse from "../models/Expanse";
import getDateValue from "../helperFunctions/getDateValue";

export const expansesSlice = createSlice({
  name: "expanses",
  initialState: {
    expanses: [],
  },
  reducers: {
    addExpanse: (state, action) => {
      state.expanses.push(new Expanse(action.payload.params).toJSON());
    },
    editExpanse: (state, action) => {
      state.expanses = state.expanses.map((item) => {
        if (item.id === action.payload.id) {
          // Replace the found object with a new Expanse object
          return new Expanse(action.payload.params).toJSON();
        }
        // Leave other objects unchanged
        return item;
      });
    },
    removeExpanse: (state, action) => {
      state.expanses.splice(state.expanses.indexOf(action.payload.id), 1);
    },
  },
});

export const addExpanse = expansesSlice.actions.addExpanse;
export const editExpanse = expansesSlice.actions.editExpanse;
export const removeExpanse = expansesSlice.actions.removeExpanse;
export default expansesSlice.reducer;
