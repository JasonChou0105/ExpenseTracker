import { createSlice } from "@reduxjs/toolkit";
import getDateValue from "../helperFunctions/getDateValue";

export const dateSlice = createSlice({
  name: "expanses",
  initialState: {
    date: {
      startDate: new Date(0).toDateString(),
      endDate: new Date().toDateString(),
    },
  },
  reducers: {
    setStartDate: (state, action) => {
      
      if (getDateValue(action.payload.date)<=getDateValue(state.date.endDate)) {
        state.date.startDate = action.payload.date;
      } else {
        console.log("AHHHHHHHHH");
      }
    },
    setEndDate: (state, action) => {
      state.date.endDate = action.payload.date;
    },
  },
});

export const setStartDate = dateSlice.actions.setStartDate;
export const setEndDate = dateSlice.actions.setEndDate;
export default dateSlice.reducer;
