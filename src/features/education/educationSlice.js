import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Bachelor CS",
    subtitle: "MIT",
    location: "Massachusetts",
    startDate: "September 2014",
    endDate: "May 2017",
    description: "Some description for education goes here",
  },
];

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation(state, action) {
      const newEducation = action.payload;
      state.push(newEducation);
    },
    deleteEducation(state, action) {
      return state.filter((education) => education.id !== action.payload);
    },
  },
});

export const { addEducation, deleteEducation } = educationSlice.actions;
export default educationSlice.reducer;
