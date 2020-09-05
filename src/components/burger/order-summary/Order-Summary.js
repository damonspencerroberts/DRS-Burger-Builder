import React from 'react';
import classes from "./Order-summary.module.css";
import ExitButton from "../exit-button/Exit-button";

const OrderSummary = (props) => {

    const orderList = Object.keys(props.ingState).map(e => {
        return <li key = {e + "chinea199393"}><span className = {classes.LabelCap}>{e}</span>: {props.ingState[e]}</li>
    })

    return <div className = {classes.OsSum}>
        <h3>Order Summary</h3>
        <p>Here is a summary of your delicious burger:</p>
        <ul>
            {orderList}
        </ul>
        <h5>Order Total: ${props.priceState.toFixed(2)}</h5>
        <h4>Finalize your order?</h4>
        <button className = {classes.OsBtn} onClick = {props.finalClick}>COMPLETE ORDER</button>
        <ExitButton exitClick = {props.exitOsClick}>X</ExitButton>
    </div>
}

export default OrderSummary;
