import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTicketsForTechnicial} from "./ticketsTechAction";

import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumbTech } from "../../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../../components/ticket-table/TicketTableTech.comp";

import { Link } from "react-router-dom";

export const TicketListsTech = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTicketsForTechnicial());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumbTech page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link> */}
        </Col>
        <Col className="text-right">
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
