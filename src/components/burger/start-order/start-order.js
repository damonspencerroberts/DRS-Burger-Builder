import React from 'react';
import classes from './start-order.module.css';

const StartOrder = (props) =>
    <div className = {classes.Start}>
        <button className = {classes.Button} onClick = {props.startBtn}>START YOUR ORDER</button>
    </div>

export default StartOrder;
