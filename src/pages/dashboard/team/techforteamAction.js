import {
    fetchTechLoading,
    fetchTechSuccess,
    fetchTechFail,
    searchTeches,
    fetchSingleTechLoading,
    fetchSingleTechSuccess,
    fetchSingleTechFail,
  } from "./techforteam";
  
  import {
      getAllTech,
      getSingleTech,


  
  } from "../../../api/techApi";


  // get all tickets for team
export const fetchAllTech = () => async (dispatch) => {
    dispatch(fetchTechLoading());
    try {
      const result = await getAllTech();
      result.data &&
    dispatch(fetchTechSuccess(result.data.result));

    } catch (error) {
      dispatch(fetchTechFail(error.message));
    }
  };
  export const fetchSingleTech = (_id) => async (dispatch) => {
    dispatch(fetchSingleTechLoading());
    try {
      const result = await getSingleTech(_id);
      dispatch(
        fetchSingleTechSuccess(
          result.data.result.length && result.data.result[0]
        )
      );
    } catch (error) {
      dispatch(fetchSingleTechFail(error.message));
    }
  };
  export const filterSerachTech = (str) => (dispatch) => {
    dispatch(searchTeches(str));
  };