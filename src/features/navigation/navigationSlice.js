import { createSlice } from "@reduxjs/toolkit";

const routes = [
  "/contact",
  "/experience",
  "/education",
  "/skills&languages",
  "/objective",
];

const initialState = {
  currentIndex: 0,
  currentRoute: "/contact",
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    nextRoute(state) {
      if (state.currentIndex < routes.length - 1) {
        state.currentIndex = state.currentIndex + 1;
        state.currentRoute = routes[state.currentIndex];
      }
    },
    prevRoute(state) {
      if (state.currentIndex > 0) {
        state.currentIndex = state.currentIndex - 1;
        state.currentRoute = routes[state.currentIndex];
      }
    },
  },
});

export const { nextRoute, prevRoute } = routeSlice.actions;
export default routeSlice.reducer;
