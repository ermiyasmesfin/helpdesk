import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Outlet, Navigate} from "react-router-dom";
import { DefaultLayout,DefaultLayoutTeam,DefaultLayoutTech } from "../../layout/DefaultLayout";


import { loginSuccess } from "../login/loginSlice";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { fetchNewAccessJWT } from "../../api/userApi";

import { loginTeamSuccess } from "../login/team-leader/loginTeamSlice";
import { getTeamProfile } from "../../pages/dashboard/team/teamAction";
import { fetchNewTeamAccessJWT } from "../../api/teamApi";

import { loginTechSuccess } from "../login/technicial/loginTechSlice";
import { getTechProfile } from "../../pages/dashboard/tech/techAction";
import { fetchNewTechAccessJWT } from "../../api/techApi";






export const PrivateRoute =({children, ...rest})=> {
    const dispatch=useDispatch();
    const {isAuth}=useSelector((state)=>state.login);
    const { user } = useSelector(state => state.user);
    

    useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT();
			result && dispatch(loginSuccess());
		};

        !user._id && dispatch(getUserProfile());

		!sessionStorage.getItem("accessJWT") &&
		localStorage.getItem("helpSite")  &&
        updateAccessJWT();

        !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());

    },[dispatch,isAuth,user._id]);

    return (isAuth ? <DefaultLayout><Outlet/></DefaultLayout>:<Navigate to = "/"/>)



};


export const PrivateRoute1 =({children, ...rest})=> {
    const dispatch=useDispatch();
    const {isAuth}=useSelector((state)=>state.loginTeam);
    const { user } = useSelector(state => state.user);
    

    useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewTeamAccessJWT();
			result && dispatch(loginTeamSuccess());
		};

        !user._id && dispatch(getTeamProfile());

		!sessionStorage.getItem("accessJWT") &&
		localStorage.getItem("helpSite")  &&
        updateAccessJWT();

        !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginTeamSuccess());

    },[dispatch,isAuth,user._id]);

    return (isAuth ? <DefaultLayoutTeam><Outlet/></DefaultLayoutTeam>:<Navigate to = "/team"/>)



};








export const PrivateRoute2 =({children, ...rest})=> {
    const dispatch=useDispatch();
    const {isAuth}=useSelector((state)=>state.loginTech);
    const { user } = useSelector(state => state.user);
    

    useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewTechAccessJWT();
			result && dispatch(loginTechSuccess());
		};

        !user._id && dispatch(getTechProfile());

		!sessionStorage.getItem("accessJWT") &&
		localStorage.getItem("helpSite")  &&
        updateAccessJWT();

        !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginTechSuccess());

    },[dispatch,isAuth,user._id]);

    return (isAuth ? <DefaultLayoutTech><Outlet/></DefaultLayoutTech>:<Navigate to = "/tech"/>)



};