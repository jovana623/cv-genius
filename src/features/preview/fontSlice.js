import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontFamily: "sans-serif",
  fontSize: "M",
  lineHeight: 1,
};

const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    changeFontFamily(state, action) {
      state.fontFamily = action.payload;
    },
    changeFontSize(state, action) {
      state.fontSize = action.payload;
    },
    changeLineHeight(state, action) {
      state.lineHeight = action.payload;
    },
  },
});

export const { changeFontFamily, changeFontSize, changeLineHeight } =
  fontSlice.actions;
export default fontSlice.reducer;
