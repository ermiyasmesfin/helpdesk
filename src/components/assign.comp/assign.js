import React  from "react";
import { useSelector,useDispatch } from "react-redux";
import {assignTicket} from "../../pages/ticket-list/tech/ticketsTechAction"


import { Button,Row,Col,Modal,Form} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useState } from "react";

export const Assign = ({_id}) => {
    const dispatch = useDispatch();
    const {teches} = useSelector((state)=>state.techforteam)
    const [message, setMessage] = useState("");
    const assign= teches.map((row)=>(row.name))

    const handelOnSubmit=(e)=>{
    e.preventDefault();
    const message={message}
    
    console.log(message)
    dispatch(assignTicket(_id, message));
    setMessage("");
  }

 return (
    <div>
      <Form onSubmit={handelOnSubmit}>
      <Modal 
    //   show={show} onHide={handleClose}
       
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered>
        
        <Modal.Header closeButton>
        <div>P tickets: {assign}</div>
          <Modal.Title>Assign Technicial
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
          <Form.Select aria-label="Default select example">
               <option>Open this to select Technicial</option>
              { teches.map((row)=>{
              return (
              <option value={message}
              >{row._id}</option>
              )}
              )}
               
               
            </Form.Select>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
        //   onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
    </div>
    
  );
};
