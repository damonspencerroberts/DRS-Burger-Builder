import React from 'react';
import classes from "./Navigation-items.module.css";
import NavItem from "./navigation-item/Nav-item";

const NavItems = (props) => 
    <ul className = {classes.NavigationItems}>
        <NavItem link = "/" exact>Burger Builder</NavItem>
        <NavItem link = "/orders">Orders</NavItem>
    </ul>
export default NavItems;

