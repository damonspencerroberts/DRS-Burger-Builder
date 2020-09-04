import React from 'react';
import classes from "./Build-Controller.module.css";


const buildController = (props) =>
    <div className = {classes.BuildControl}>
        <div className = {classes.Price}>${props.eachPrice}</div>
        <div className = {classes.Label}>{props.label}</div>
        <button 
        className = {classes.BuildControlBtnLess} 
        onClick = {props.lessClick}
        disabled = {props.disInfo}>-</button>
        <button 
        className = {classes.BuildControlBtnMore} 
        onClick = {props.moreClick}
        >+</button>
    </div>

export default buildController;