import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-list/ticketsSlice";
import loginReducer from "./components/login/loginSlice";

import loginTeamReducer from "./components/login/team-leader/loginTeamSlice";
import loginTechReducer from "./components/login/technicial/loginTechSlice";

import userReducer from "./pages/dashboard/userSlice";
import teamReducer from "./pages/dashboard/team/teamSlice";
import techforteamReducer from "./pages/dashboard/team/techforteam";
import techReducer from "./pages/dashboard/tech/techSlice";

import newTicketReducer from "./components/add-ticket-form/addTicketSlicer";
import registrationReducer from "./components/registration-form/userRegestrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";

const store = configureStore({
	reducer: {

		loginTeam: loginTeamReducer,
		loginTech: loginTechReducer,

		team: teamReducer,
		tech: techReducer,
		techforteam:techforteamReducer,




		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
		password: passwordReducer,
	},
});

export default store;
