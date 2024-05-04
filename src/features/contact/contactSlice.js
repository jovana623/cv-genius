import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Isabella",
  lastName: "Stewart",
  occupation: "Backend developer",
  email: "example@gmail.com",
  phone: "(415) 555-1234",
  github: "github.com/isabella34",
  birthDate: "18 March 1995",
  linkedIn: "linkedin.com/isabella-stewart",
  personalSite: "wwww.isabellasreward.com",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    changeFirstName(state, action) {
      state.firstName = action.payload;
    },
    changeLastName(state, action) {
      state.lastName = action.payload;
    },
    changeOccupation(state, action) {
      state.occupation = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePhone(state, action) {
      state.phone = action.payload;
    },
    changeGithub(state, action) {
      state.github = action.payload;
    },
    changeBirthDate(state, action) {
      state.birthDate = action.payload;
    },
    changeLinkedIn(state, action) {
      state.linkedIn = action.payload;
    },
    changePersonalSite(state, action) {
      state.personalSite = action.payload;
    },
  },
});

export const {
  changeFirstName,
  changeLastName,
  changeOccupation,
  changeEmail,
  changePhone,
  changeGithub,
  changeBirthDate,
  changeLinkedIn,
  changePersonalSite,
} = contactSlice.actions;

export default contactSlice.reducer;
