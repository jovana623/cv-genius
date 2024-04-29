import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Isabella",
  lastName: "Stewart",
  occupation: "Backend developer",
  email: "example@gmail.com",
  address: "1234 Market St, San Francisco, CA 94102",
  phone: "(415) 555-1234",
  nationality: "American",
  birthDate: "18 March 1995",
  linkedIn: "linkedin.com/isabella-stewart",
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
    changeAddress(state, action) {
      state.address = action.payload;
    },
    changePhone(state, action) {
      state.phone = action.payload;
    },
    changeNationality(state, action) {
      state.nationality = action.payload;
    },
    changeBirthDate(state, action) {
      state.birthDate = action.payload;
    },
    changeLinkedIn(state, action) {
      state.linkedIn = action.payload;
    },
  },
});

export const {
  changeFirstName,
  changeLastName,
  changeOccupation,
  changeEmail,
  changeAddress,
  changePhone,
  changeNationality,
  changeBirthDate,
  changeLinkedIn,
} = contactSlice.actions;

export default contactSlice.reducer;
