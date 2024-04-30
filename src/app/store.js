import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactSlice";
import navigationReducer from "../features/navigation/navigationSlice";
import experienceReducer from "../features/experence/experienceSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    contact: contactReducer,
    experience: experienceReducer,
  },
});
