import React from 'react';
import classes from "./Nav-item.module.css";
import {NavLink} from "react-router-dom";


const NavItem = (props) => 
    <li className = {classes.NavItem}>
        <NavLink 
        to = {props.link} 
        exact = {props.exact}
        activeClassName = {classes.active}
        >{props.children}</NavLink>
    </li>

export default NavItem;
