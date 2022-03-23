import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { PageBreadcrumbTeam } from "../../components/breadcrumb/Breadcrumb.comp";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/update-ticket-team";
import { useParams } from "react-router-dom";

import { fetchSingleTicketTeam, closeTicket } from "../ticket-list/team/ticketsTeamAction";
import { resetResponseMsg } from "../ticket-list/team/ticketsTeamSlice";

export const TicketTeam = () => {
	const { tId } = useParams();
	const dispatch = useDispatch();
	const {
		isLoading,
		error,
		selectedTicket,
		replyMsg,
		replyTicketError,
	} = useSelector(state => state.tickets);

	useEffect(() => {
		dispatch(fetchSingleTicketTeam(tId));

		return () => {
			(replyMsg || replyTicketError) && dispatch(resetResponseMsg());
		};
	}, [tId, dispatch, replyMsg, replyTicketError]);

	return (
		<Container>
			<Row>
				<Col>
					<PageBreadcrumbTeam page="Ticket" />
				</Col>
			</Row>

			<Row>
				<Col>
					{isLoading && <Spinner variant="primary" animation="border" />}
					{error && <Alert variant="danger">{error}</Alert>}
					{replyTicketError && (
						<Alert variant="danger">{replyTicketError}</Alert>
					)}
					{replyMsg && <Alert variant="success">{replyMsg}</Alert>}
				</Col>
			</Row>
			<Row>
				<Col className="text-weight-bolder text-secondary">
					<div className="subject">Subject: {selectedTicket.subject}</div>
					<div className="date">
						Ticket Opened:{" "}
						{selectedTicket.openAt &&
							new Date(selectedTicket.openAt).toLocaleString()}
					</div>
					<div className="status">Status: {selectedTicket.status}</div>
				</Col>
				<Col className="text-right">
					<Button
						variant="outline-info"
						onClick={() => dispatch(closeTicket(tId))}
						disabled={selectedTicket.status === "Closed"}
					>
						Close Ticket
					</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					{selectedTicket.conversations && (
						<MessageHistory msg={selectedTicket.conversations} />
					)}
				</Col>
			</Row>
			<hr />

			<Row className="mt-4">
				<Col>
					<UpdateTicket _id={tId} />
				</Col>
			</Row>
		</Container>
	);
};
