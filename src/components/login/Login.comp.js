import React,{useEffect, useState} from "react";

import { Container , Row, Col,Form,Button ,Spinner,Alert} from "react-bootstrap";

import { loginPending,loginSuccess,loginFail } from "./loginSlice";
import {useDispatch,useSelector} from"react-redux";
import { userLogin } from "../../api/userApi";
import { useNavigate,useLocation } from "react-router-dom";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const LoginForm = ({formSwitcher}) =>{
    const disPatch =useDispatch();
    const navigate=useNavigate();
    let location = useLocation();

    const {isLoading,isAuth,error}=useSelector((state)=>state.login);
    let { from } = location.state || { from: { pathname: "/dashboard" } };

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
        disPatch(loginPending());
        try {
            const isAuth=await userLogin({email,password})
            
            if (isAuth.status==="error"){
           return  disPatch(loginFail(isAuth.message))
        }
        disPatch(loginSuccess());
        disPatch(getUserProfile());
        navigate("/dashboard");
        } catch (error) {
            disPatch(loginFail(error.message))
            
        }
        

    };
    return(
       

        <Container>
            <Row>
                <Col>
            <h1 className=" text-center">Client login</h1>
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

					{/* <a href="#!" onClick={() => formSwitcher("logintec")}>
                        forTechnicial</a>
                        <br/>
					<a href="#!" onClick={() => formSwitcher("reset")}>
                        Forget Password?</a> */}
				</Col>
			</Row>
            <Row className="py-4">
				<Col>
					Are you new here? <a href="/registration">Register Now</a>
				</Col>
			</Row>
        </Container>
        
    );
}