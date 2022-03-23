import React  from "react";
import { useSelector,useDispatch } from "react-redux";
import {assignTicket} from "../../pages/ticket-list/tech/ticketsTechAction"


import { Table,Button,Row,Col,Modal,Form} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useState } from "react";

export const TicketTable = () => {
  const dispatch = useDispatch();

  

  const [show, setShow] = useState(false);
  const[message,setMessage]=useState("");
  const[formData,setFormData]=useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) =>{ 
    setFormData(e);
    setShow(true);}


  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  const {teches} = useSelector((state)=>state.techforteam)
  const assign= teches.map((row)=>(row.name))
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handelOnSubmit=(e)=>{
   
   
    
    // console.log(message)
    // console.log(formData)
  
    dispatch(assignTicket( formData,message));
    setMessage("");
  }
  

  return (
    <div>
      {/* <div>P tickets: {assign}</div> */}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
          <th>Technicial</th>
          <th>assign Technicial</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length ? (
          searchTicketList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/teamticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
              <td>{row.techName}
              </td>
              <td>
              
                        <Button variant="primary" onClick={()=>handleShow(row._id)} >Assign</Button>
                  
               </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>

    <div>
     
    
      <Modal data={formData} show={show} onHide={handleClose}
       
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered>
        
        <Modal.Header closeButton>
          <Modal.Title>Assign Technicial
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
          <Form.Select onChange={handleOnChange}>
               <option>select Technicial</option>
              { teches.map((row)=>{
              return (
                  <option key={row._id} value={row._id}>{row.name}</option>
            
              
              )}
              )}
               
               
            </Form.Select>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={()=>handelOnSubmit(message,FormData)} >
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
     
     
      
    </div>
    </div>
  );
};
