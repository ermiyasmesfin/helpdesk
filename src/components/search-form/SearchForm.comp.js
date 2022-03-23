import React from "react";
import {Form,Col,Row} from "react-bootstrap"

import { useDispatch } from "react-redux";
import { filterSerachTicket } from "../../pages/ticket-list/ticketsAction";


export const SearchForm =()=>{
    const dispatch=useDispatch();

    const handleOnChange=(e)=>{
        const {value}=e.target;

        dispatch(filterSerachTicket(value));
    }
    
    return(
        <div>
        <Form>
            <Form.Group as ={Row}>
                <Form.Label column sm="2">
                    Search:{" "}
                    </Form.Label>
                <Col sm="9">
                    <Form.Control name="searchStr"
                    onChange={handleOnChange}
                    placeholder="Search ..."/>
                </Col>
            </Form.Group>
        </Form>
        </div>
    );
}