import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const techSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTechPending: (state) => {
      state.isLoading = true;
    },
    getTechSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    //  fetchTechSuccess: (state, action) => {
    //   state.tech = action.payload;
    //   state.user = action.payload;
    //   state.isLoading = false;
    // },
    getTechFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  getTechPending,
  getTechSuccess,
  getTechFail,
  // fetchTechSuccess,
} = techSlice.actions;

export default techSlice.reducer;
