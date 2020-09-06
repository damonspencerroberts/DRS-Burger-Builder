import React, {Component} from 'react';
import classes from "./Order-summary.module.css";
import ExitButton from "../exit-button/Exit-button";

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log("[Order Summary] Update...")
    }

    render(){
        const orderList = Object.keys(this.props.ingState).map(e => {
        return <li key = {e + "chinea199393"}><span className = {classes.LabelCap}>{e}</span>: {this.props.ingState[e]}</li>
        })

        return (<div className = {classes.OsSum}>
        <h3>Order Summary</h3>
        <p>Here is a summary of your delicious burger:</p>
        <p>Are you sure you don't want any more of these delicious ingredients?</p>
        <ul>
            {orderList}
        </ul>
        <h5>Order Total: ${this.props.priceState.toFixed(2)}</h5>
        <h4>Finalize your order?</h4>
        <button className = {classes.OsBtn} onClick = {this.props.finalClick}>COMPLETE ORDER</button>
        <ExitButton exitClick = {this.props.exitOsClick}>X</ExitButton>
    </div>);
    }
} 

export default OrderSummary;
