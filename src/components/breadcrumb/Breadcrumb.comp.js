import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const PageBreadcrumb =({page}) =>{
    return(
        <Breadcrumb>
        <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
            </Breadcrumb>
    )
}
export const PageBreadcrumbTeam =({page}) =>{
    return(
        <Breadcrumb>
        <LinkContainer to="/team">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
            </Breadcrumb>
    )
}
export const PageBreadcrumbTech =({page}) =>{
    return(
        <Breadcrumb>
        <LinkContainer to="/tech">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
            </Breadcrumb>
    )
}