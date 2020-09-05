import React from 'react';
import classes from "./Toolbar.module.css";
import Logo from "../../logo/logo";
import NavigationItems from "../navigation-items/Navigation-items";





const Toolbar = (props) => {

    const screenSmall = window.innerWidth < 500;
    return <header className = {classes.Toolbar}>
        {screenSmall ? 
            <div 
            onClick = {props.menuClick} 
            className = {classes.Menu}
            >
            <i className="fas fa-ellipsis-h"></i>
            </div> : <header  className = {classes.Menu}>DRS Burger</header>}
        <div className = {classes.Logo}><Logo/></div>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
}

export default Toolbar;
