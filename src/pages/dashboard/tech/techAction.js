import { getTechPending, getTechSuccess, getTechFail } from "./techSlice";
import { fetchTech } from "../../../api/techApi";

export const getTechProfile = () => async (dispatch) => {
  try {
    dispatch(getTechPending());

    const result = await fetchTech();

    if (result.Tech && result.Tech._id)
      return dispatch(getTechSuccess(result.Tech));

    dispatch(getTechFail("Technicial is not found"));
  } catch (error) {
    dispatch(getTechFail(error));
  }
};
