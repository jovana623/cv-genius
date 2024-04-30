import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigation/navigationSlice";
import contactReducer from "../features/contact/contactSlice";
import experienceReducer from "../features/experence/experienceSlice";
import educationReducer from "../features/education/educationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    contact: contactReducer,
    experience: experienceReducer,
    education: educationReducer,
  },
});