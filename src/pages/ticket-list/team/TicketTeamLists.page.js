import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTeamTickets } from "./ticketsTeamAction";

import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumbTeam } from "../../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../../components/ticket-table/TicketTableTeam.comp ";

import { Link } from "react-router-dom";

export const TicketListsTeam = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTeamTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumbTeam page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link> */}
        </Col>
        <Col className="text-right mt-1000">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
