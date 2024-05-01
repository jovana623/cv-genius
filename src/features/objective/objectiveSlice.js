import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "Passionate Frontend Developer dedicated to crafting responsive, user-friendly web experiences. Proficient in modern technologies such as HTML, CSS, JavaScript, and frameworks like React. Committed to continuous learning and delivering high-quality code.",
};

const objectiveSlice = createSlice({
  name: "objective",
  initialState,
  reducers: {
    changeObjective(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeObjective } = objectiveSlice.actions;
export default objectiveSlice.reducer;
