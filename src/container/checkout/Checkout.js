import React, { Component } from 'react';
import CheckoutSummary from "../../components/order/checkoutSummary/Checkout-Summary";
import {DefaultIngredients} from "../burger-builder/ing-price-json";
export default class Checkout extends Component {
    render() {
        return(
            <div>
                <CheckoutSummary 
                   ingredients = {DefaultIngredients} 
                />
            </div>
        );
    }
}