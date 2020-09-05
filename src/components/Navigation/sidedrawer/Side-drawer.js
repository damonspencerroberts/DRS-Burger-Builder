import React, {Fragment as Fr} from 'react';
import NavItems from "../navigation-items/Navigation-items";
import classes from "./Side-drawer.module.css";
import Logo from "../../logo/logo";
import Backdrop from "../../User-Interface/Backdrop/Backdrop";


const sideDrawer = (props) => {
    let AttClasses = [classes.SideDrawer, classes.Close]
    if (props.showSide) {
        AttClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Fr>
            <Backdrop show = {props.showSide} backdropClick = {props.bClick}/>
            <div className = {AttClasses.join(' ')}>
                <div className = {classes.Logo} onClick = {props.sideLogoClick}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Fr>
    )
}

export default sideDrawer;
