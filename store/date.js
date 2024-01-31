import { createSlice } from "@reduxjs/toolkit";
import getDateValue from "../helperFunctions/getDateValue";

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: {
      startDate: new Date(
        new Date().setDate(new Date().getDate() - 7)
      ).toDateString(),
      endDate: new Date().toDateString(),
    },
  },
  reducers: {
    setStartDate: (state, action) => {
      var startDateValue = getDateValue(action.payload.date);
      var endDateValue = getDateValue(state.date.endDate);

      if (startDateValue <= endDateValue) {
        state.date.startDate = action.payload.date;
      }
    },
    setEndDate: (state, action) => {
      var endDateValue = getDateValue(action.payload.date);
      var startDateValue = getDateValue(state.date.startDate);

      if (startDateValue <= endDateValue) {
        state.date.endDate = action.payload.date;
      }
    },
  },
});

export const setStartDate = dateSlice.actions.setStartDate;
export const setEndDate = dateSlice.actions.setEndDate;
export default dateSlice.reducer;
