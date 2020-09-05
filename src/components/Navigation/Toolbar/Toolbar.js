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
            <i style ={{
                color: "#ff51ff", 
                textShadow: "1px 1px #1efffa",
                transform: "rotate(270deg)"}} className="fas fa-chevron-circle-down fa-2x"></i>
            </div> : <header  className = {classes.Menu}>DRS Burger</header>}
        <div className = {classes.Logo}><Logo/></div>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
}

export default Toolbar;
