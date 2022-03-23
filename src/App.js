import React  from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {PrivateRoute,PrivateRoute1,PrivateRoute2} from "./components/private-route/PrivateRoute.comp";

import './App.css'; 

import { Dashboard } from "./pages/dashboard/dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/tickets/Ticket.page";
import { TicketTeam } from "./pages/tickets/Ticket.Team.page ";
import {TicketTech} from "./pages/tickets/Ticket.Tech.page ";


import { Entry } from "./pages/entry/Entry.page";
import { UserVerification } from "./pages/user-verification/UserVerification.page";
import { PasswordOtpForm } from "./pages/password-reset/PasswordOtpForm.page";
import { Registration } from "./pages/registration/Registration.page";


import { Entry1 } from "./pages/entry/Entry.page.team";
import { DashboardTeam } from "./pages/dashboard/team/dashboard.Team.page";
// import {Assign} from "./components/assign.comp/assign";
import {TicketListsTeam} from "./pages/ticket-list/team/TicketTeamLists.page";


import { Entry2 } from "./pages/entry/Entry.page.tech";
import { DashboardTech } from "./pages/dashboard/tech/dashboard.Tech.page";
import {TicketListsTech} from "./pages/ticket-list/tech/TicketTechLists.page"

function App() {
  return ( <div className="app">

    <Router>
      <Routes>
       
         <Route path="/"element={<Entry/>}/>
         <Route path="/team"element={<Entry1/>}/>
         <Route path="/tech"element={<Entry2/>}/>
         <Route path="/registration"element={<Registration/>}/>
         <Route path="/password-reset"element={<PasswordOtpForm/>}/>
         <Route path="/verification/:_id/:email"element={<UserVerification/>}/>



         <Route element ={<PrivateRoute/>}>
           <Route path="/dashboard" element={<Dashboard/>}/>
         </Route>

         <Route element ={<PrivateRoute1/>}>
           <Route path="/teamdashboard" element={<DashboardTeam/>}/>
         </Route>
         <Route element ={<PrivateRoute2/>}>
           <Route path="/techdashboard" element={<DashboardTech/>}/>
         </Route>


         <Route element={<PrivateRoute/>}>
         <Route path="/ticket/:tId" element={<Ticket/>}/>
         </Route>
         <Route element={<PrivateRoute/>}>
         <Route path="/tickets" element={<TicketLists/>}/>
         </Route>
         <Route element={<PrivateRoute/>}>
         <Route path="/add-ticket" element={<AddTicket/>}/>
         </Route>


         <Route element={<PrivateRoute1/>}>
         <Route path="/teamticket/:tId" element={<TicketTeam/>}/>
         </Route>
         <Route element={<PrivateRoute1/>}>
         <Route path="/teamtickets" element={<TicketListsTeam/>}/>
         </Route>
         {/* <Route element={<PrivateRoute1/>}>
         <Route path="/assignTech/:tId" element={<Assign/>}/>
         </Route> */}


        <Route element={<PrivateRoute2/>}>
         <Route path="/techticket/:tId" element={<TicketTech/>}/>
         </Route>
         <Route element={<PrivateRoute2/>}>
         <Route path="/techtickets" element={<TicketListsTech/>}/>
         </Route>
     
        <Route path="*"element={<h1>404 Page not found</h1>}/>
					

      </Routes>
    </Router>
  </div>
   
  );
}

export default App;
