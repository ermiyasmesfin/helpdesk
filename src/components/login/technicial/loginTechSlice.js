import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginTechSlice = createSlice({
  name: "loginTech",
  initialState,
  reducers: {
    loginTechPending: (state) => {
      state.isLoading = true;
    },
    loginTechSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginTechFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginTechSlice;

export const { loginTechPending, loginTechSuccess, loginTechFail } = actions;

export default reducer;
