import React from 'react';
import classes from "./Navigation-items.module.css";
import NavItem from "./navigation-item/Nav-item";

const NavItems = (props) => 
    <ul className = {classes.NavigationItems}>
        <NavItem link = "/" active>Burger Builder</NavItem>
        <NavItem link = "/">Checkout</NavItem>
    </ul>
export default NavItems;

