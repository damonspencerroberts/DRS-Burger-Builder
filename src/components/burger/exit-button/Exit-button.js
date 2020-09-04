import React from 'react';
import classes from './Exit-button.module.css';


const ExitButton = (props) => 
    <button className = {classes.Btn} onClick = {props.exitClick}>X</button>

export default ExitButton;

