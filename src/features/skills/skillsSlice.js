import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "JavaScript",
  },
  { id: 2, name: "React" },
  { id: 3, name: "HTML & CSS" },
  { id: 4, name: "Python" },
];

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill(state, action) {
      const newSkill = action.payload;
      state.push(newSkill);
    },
    deleteSkill(state, action) {
      return state.filter((skill) => skill.id !== action.payload);
    },
  },
});

export const { addSkill, deleteSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
