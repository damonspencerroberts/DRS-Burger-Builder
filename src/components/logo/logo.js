import React from 'react';
import classes from "./logo.module.css";
import LogoPic from "../../assets/Drs-burger.png";

const Logo = () => <div className = {classes.Logo}>
    <img src = {LogoPic} alt = "drs-burger"></img>
</div>

export default Logo;


