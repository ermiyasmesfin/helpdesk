import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teches: [],
  isLoading: false,
  error: "",
  searchTechList: [],
  selectedTech: {},
  
};
const techListSlice = createSlice({
  name: "techList",
  initialState,
  reducers: {
    fetchTechLoading: (state) => {
      state.isLoading = true;
    },
    fetchTechSuccess: (state, action) => {
      state.teches = action.payload;
      state.searchTechList = action.payload;
      state.isLoading = false;
    },
    fetchTechFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchTeches: (state, { payload }) => {
      state.searchTechList = state.teches.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleTechLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTechSuccess: (state, { payload }) => {
      state.selectedTech = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleTechFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    
  },
});
const { reducer, actions } = techListSlice;
export const {
  fetchTechLoading,
  fetchTechSuccess,
  fetchTechFail,
  searchTeches,
  fetchSingleTechLoading,
  fetchSingleTechSuccess,
  fetchSingleTechFail,
}=actions;
export default reducer;
