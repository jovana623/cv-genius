import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "English", level: "Native", certificate: "No" },
  {
    id: 2,
    name: "French",
    level: "Intermediate",
    certificate: "Oxford certificate",
  },
];

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    addLanguage(state, action) {
      const newLanguage = action.payload;
      state.push(newLanguage);
    },
    deleteLanguage(state, action) {
      return state.filter((language) => language.id !== action.payload);
    },
  },
});

export const { addLanguage, deleteLanguage } = languageSlice.actions;
export default languageSlice.reducer;
