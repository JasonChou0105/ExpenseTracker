import { createSlice } from "@reduxjs/toolkit";
import Expanse from "../models/Expanse";

export const expansesSlice = createSlice({
  name: "expanses",
  initialState: {
    expanses: [],
  },
  reducers: {
    addExpanse: (state, action) => {
        state.expanses.push(new Expanse(action.payload.params).toJSON())
    },
    removeExpanse: (state, action) => {
        state.expanses.splice(state.expanses.indexOf(action.payload.id), 1)
    }
  }
});

export const addExpanse = expansesSlice.actions.addExpanse
export const removeExpanse = expansesSlice.actions.removeExpanse
export default expansesSlice.reducer
