import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginTeamSlice = createSlice({
  name: "loginTeam",
  initialState,
  reducers: {
    loginTeamPending: (state) => {
      state.isLoading = true;
    },
    loginTeamSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginTeamFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginTeamSlice;

export const { loginTeamPending, loginTeamSuccess, loginTeamFail } = actions;

export default reducer;
