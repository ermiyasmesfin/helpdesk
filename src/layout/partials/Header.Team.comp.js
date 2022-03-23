import React from "react";

import { Navbar,Nav } from "react-bootstrap";

// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import logo from "../../assests/img/logo.png";

import { useNavigate} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

import { teamLogout } from "../../api/teamApi";





export const HeaderTeam = () => {
    const navigate = useNavigate();

    const logMeOut =()=>{
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("helpSite");
        teamLogout();
        navigate("/team");
    };
    return(
        <Navbar collapseOnSelect bg="info"variant="dark" expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-auto">

                    <LinkContainer to ="/teamdashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to ="/teamtickets"><Nav.Link>Ticket List</Nav.Link></LinkContainer>
                    
                    <Nav.Link onClick={logMeOut} >Logout</Nav.Link>
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

