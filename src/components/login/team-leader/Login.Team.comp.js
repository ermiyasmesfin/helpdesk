import React,{useEffect, useState} from "react";

import { Container , Row, Col,Form,Button ,Spinner,Alert} from "react-bootstrap";

import { loginTeamPending,loginTeamSuccess,loginTeamFail} from "./loginTeamSlice";
import {useDispatch,useSelector} from"react-redux";
import { teamLogin } from "../../../api/teamApi";
import { useNavigate,useLocation } from "react-router-dom";
import { getTeamProfile} from "../../../pages/dashboard/team/teamAction";

export const LoginTeamForm = ({formSwitcher}) =>{
    const disPatch =useDispatch();
    const navigate=useNavigate();
    let location = useLocation();

    const {isLoading,isAuth,error}=useSelector((state)=>state.loginTeam);
    let { from } = location.state || { from: { pathname: "/teamdashboard" } };

    useEffect(()=>{

       sessionStorage.getItem('accessJWT')
       && navigate(from);

    },[isAuth,navigate])

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    

    const handleOnChange = e =>{
        const { name, value} = e.target;

        switch(name){
            case'email':
                setEmail(value)
                break
            case'password':
                setPassword(value)
                break
            default:
                break;

        };
    
    
    };
    const handleOnSubmit =async(e) =>{
        e.preventDefault();
        if (!email || !password){
           return alert("fill up all the form!")
        }
        disPatch(loginTeamPending());
        // disPatch(loginTechPending());
        try {
            const isAuth=await teamLogin({email,password})
            // const isAuth1=await techLogin({email,password})
            
            if (isAuth.status==="error"){
               
           return  disPatch(loginTeamFail(isAuth.message))
        }
        disPatch(loginTeamSuccess());
        // disPatch(loginTechSuccess());
        disPatch(getTeamProfile());
        // disPatch(getTechProfile());
        navigate("/teamdashboard");
        } catch (error) {
            disPatch(loginTeamFail(error.message))
            // disPatch(loginTechFail(error.message))
            
        }
        

    };
    return(
       

        <Container>
            <Row>
                <Col>
            <h1 className=" text-center">Teamleader login</h1>
            <hr/>
            {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email"
                        required
                       />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="enter password"
                        required
                        
                        />
                    </Form.Group>
                    <hr/>
                    <Button type="submit">Login</Button>
                    {isLoading&&<Spinner variant="primary"animation="border"/>}
                    </Form>
                    <hr/>
                </Col>
             </Row>
             <Row>
             
				<Col>
					<a href="/password-reset">Forget Password</a>
				</Col>
			</Row>
        </Container>
        
    );
}