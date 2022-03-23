import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const teamSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTeamPending: (state) => {
      state.isLoading = true;
    },
    getTeamSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getTeamFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  getTeamPending,
  getTeamSuccess,
  getTeamFail,
} = teamSlice.actions;

export default teamSlice.reducer;
