import React from 'react';
import NavItems from "../navigation-items/Navigation-items";
import classes from "./Side-drawer.module.css";
import Logo from "../../logo/logo";

const sideDrawer = (props) => {
    //...
    return (
        <div className = {classes.SideDrawer}>
        <div className = {classes.Logo}>
            <Logo/>
        </div>
            <nav>
                <NavItems/>
            </nav>
        </div>
    )
}

export default sideDrawer;
