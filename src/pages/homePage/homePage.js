import React, { useState } from "react";
//import { Container } from "react-bootstrap";
// import './entry.style.css';
// import '../../components/login/login.style.css';
import { LoginForm } from "../../components/login/Login.comp";
// import {LoginForm1} from "../../components/login/team-leader/Login.comp"
import {LoginForm2} from "../../components/login/technicial/Login.comp"
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";




export const Entry = () =>{


    
    const[frmload,setFrmload]=useState("login");

    const formSwitcher=(frmType)=>{
        setFrmload(frmType);
    }


    return(
    <div className="entry-page bg-info">
        <div className="form-box">
            {frmload ==='login'&&
            <LoginForm 
            formSwitcher={formSwitcher}
           />}

            {frmload ==='logintec'&&
            <LoginForm2 
            formSwitcher={formSwitcher}
           />}
            {/* {frmload ==='loginte'&&
            <LoginForm1 
            formSwitcher={formSwitcher}
           />} */}
        </div>
    
    </div>
    );
};