/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Component} from 'react';

import ExitButton from "../exit-button/Exit-button";
import classes from "./Order-conf.module.css";

class OrderConfirmation extends Component {
    componentDidUpdate() {
        console.log('[Order Confirmation] Update...')
    }
    
    render() {
        return(
            <div className = {classes.OsDiv}>
                <h3 className = {classes.Confirmation}>Confirmation!</h3>
                <h2>Enjoy your juicy burger!<span>🍔😍😋</span></h2> 
                <h4>Your final order total was ${this.props.priceTotal}!</h4>
                <p>Customer Information:</p>
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Email: {this.props.email}</li>
                    <li>Address: {this.props.address}</li>
                    <li>Phone Number: {this.props.phone}</li>
                    <li>Delivery Method: {this.props.method}</li>
                </ul>
                <p className={classes.Confirmation}>Thank you! A confirmation email has been sent to {this.props.email}.</p>
                <ExitButton exitClick = {this.props.showConfirm}/>
            </div>);
    }
}  
    

export default OrderConfirmation;
