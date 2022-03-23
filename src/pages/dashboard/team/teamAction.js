import { getTeamPending, getTeamSuccess, getTeamFail } from "./teamSlice";
import {fetchTeam} from "../../../api/teamApi";
// import {fetchTech} from "../../../api/techApi";



export const getTeamProfile = () => async (dispatch) => {
  try {
    dispatch(getTeamPending());

    const result = await fetchTeam();

    if (result.Team && result.Team._id)
      return dispatch(getTeamSuccess(result.Team));

    dispatch(getTeamFail("Team leader is not found"));
  } catch (error) {
    dispatch(getTeamFail(error));
  }
};

// export const getTechProfile = () => async (dispatch) => {
//   try {
//     dispatch(getTeamPending());

//     const result = await fetchTech();

//     if (result.Tech && result.Tech._id)
//       return dispatch(getTeamSuccess(result.Tech));

//     dispatch(getTeamFail("Tech is not found"));
//   } catch (error) {
//     dispatch(getTeamFail(error));
//   }
// };

