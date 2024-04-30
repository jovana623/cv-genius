import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "Meta",
    location: "San Francisco",
    startDate: "May 2017",
    endDate: "September 2022",
    description: "Some description goes here",
  },
];

const experenceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience(state, action) {
      const newExperence = action.payload;
      state.push(newExperence);
    },
    deleteExperence(state, action) {
      return state.filter((experience) => experience.id !== action.payload);
    },
  },
});

export const { addExperience, deleteExperence } = experenceSlice.actions;
export default experenceSlice.reducer;
