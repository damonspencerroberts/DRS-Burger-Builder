import React from 'react';
import classes from "./Toolbar.module.css";
import Logo from "../../../assets/Drs-burger.png";
import NavigationItems from "../navigation-items/Navigation-items";


const Toolbar = (props) => 
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <div><img className = {classes.Logo} src = {Logo} alt = "drs-burger"></img></div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>

export default Toolbar;
