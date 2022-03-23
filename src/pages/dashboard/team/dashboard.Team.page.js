import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { TicketTable } from "../../../components/ticket-table/TicketTableTeam.comp ";
// import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrumbTeam } from "../../../components/breadcrumb/Breadcrumb.comp";


import { fetchAllTeamTickets} from "../../ticket-list/ticketsAction";
import { fetchAllTech} from "../../dashboard/team/techforteamAction";



export const DashboardTeam = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  const {teches} = useSelector((state)=>state.techforteam)

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTeamTickets());
     
    }
  }, [tickets, dispatch]);
  
  useEffect(() => {
    // if (!teches.length) {
      dispatch(fetchAllTech());
     
    // }
  }, []);
// 
  const pendingTickets = tickets.filter((row) => row.status !== "Closed");
  const totlatTickets = tickets.length;
  // const assign= teches.map((row)=>(row.name))


  // const [openPopup, setOpenPopup]=useState(false)
  
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumbTeam page="Dashboard" />
        </Col>
      </Row>
      {/* <Row>
        <Col className="text-center mt-5 mb-2">
          
            <Button
              variant="info"
              onClick={()=> setOpenPopup(true)}
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Assign Technicial
            </Button>
          
        </Col>
      </Row> */}
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: {totlatTickets}</div>
          <div>Pending tickets: {pendingTickets.length}</div>
          {/* <div>P tickets: {assign}</div> */}
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} teches={teches} />
        </Col>
      </Row>
      {/* <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}>

        </Popup> */}
    </Container>
  );
};
