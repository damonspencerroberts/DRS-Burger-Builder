import React from 'react';
import classes from "./Checkout-Summary.module.css";
import Burger from "../burger/Burger";


const checkoutSummary = (props) => {
    return (
        <div className = {classes.CheckSummary}>
            <h3>Like how your burger looks?</h3>
            <h4>Continue to checkout!</h4>
            <div stylle = {{
                height: "1500px",
                width: "150px",
                margin: "auto"
            }}>
            <Burger 
                show
                totalPrice = {props.totalPrice}
                ingredients = {props.ingredients}
            />
            <button className = {classes.SuBtn} onClick = {props.contClick}>Continue</button>
            <button className = {classes.FaBtn} onClick = {props.cancClick}>Cancel</button>
            </div>
        </div>

    );
}

export default checkoutSummary;
