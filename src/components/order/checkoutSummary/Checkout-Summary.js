import React from 'react';
import classes from "./Checkout-Summary.module.css";
import Burger from "../../burger/Burger";


const checkoutSummary = (props) => {
    return (
        <div className = {classes.CheckSummary}>
            <h1>Such a delicious burger!</h1>
            <div stylle = {{
                height: "1500px",
                width: "150px",
                margin: "auto"
            }}>
            <Burger 
                show = {false}
                ingredients = {props.ingredients}
            />
            <button className = {classes.SuBtn} onClick>Continue</button>
            <button className = {classes.FaBtn} onClick>Cancel</button>
            </div>
        </div>

    );
}

export default checkoutSummary;
