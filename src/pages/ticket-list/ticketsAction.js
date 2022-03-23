import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
} from "./ticketsSlice";


// import { getTechPending,
//   // fetchTechSuccess,
//   getTechFail,} 
// from "../../pages/dashboard/tech/techSlice"


import {
  getAllTickets,
  getAllTechTickets,
  getAllTeamTickets,
  getSingleTicket,
  updateReplyTicket,
  updateTicketStatusClosed,
} from "../../api/ticketApi";
// import {fetchTechForTeam,} from "../../api/techApi";

// get all tickets for team
export const fetchAllTeamTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTeamTickets();
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

//get all technicial for team
// export const fetchAllTech = () => async (dispatch) => {
//   dispatch(getTechPending());
//   try {
//     const result = await fetchTechForTeam();
//     console.log(result)
//     result.data.result.length &&
//       dispatch(fetchTechSuccess(result.data.result));
//   } catch (error) {
//     dispatch(getTechFail(error.message));
//   }
// };
//fetch all assigned to techniciial ticket


export const fetchAllTicketsForTechnicial = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTechTickets();
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};






export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSerachTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

//Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};

//Actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result);
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(replyTicketFail(error.message));
  }
};
//Actions for closing ticket
export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(closeTicketSuccess("Status Updated successfully"));
  } catch (error) {
    console.log(error.message);
    dispatch(closeTicketFail(error.message));
  }
};
