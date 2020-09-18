import React, { Component } from 'react';
import CheckoutSummary from "../../components/order/checkoutSummary/Checkout-Summary";
import {Route, withRouter} from "react-router-dom";
import {DefaultIngredients} from "../burger-builder/ing-price-json";
import ContactData from "../contact-data/contact-data";

class Checkout extends Component {
    constructor() {
        super()

        this.state = {
            ing: DefaultIngredients,
            price: 4.00
        }

        this.handleContinue = this.handleContinue.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.isOdd = this.isOdd.bind(this);

    }
    
    componentDidMount() {
        let query = this.props.location.search.split(/[?&=]/);
        const price = query.slice(-1);
        const newPrice = parseFloat(price[0]).toFixed(2);
        
        query = query.slice(1, -1)

        const ingredient = {};
        const ingred = [];
        const count = [];

        for (let i in query) {
            this.isOdd(i) ? ingred.push(query[i]) : count.push(parseInt(query[i]))
        }

        for (let i=0; i < ingred.length; i++) {
            ingredient[ingred[i]] = count[i]
        }
        //console.log(ingredient)

        this.setState({ing: ingredient, price: newPrice})

    }

    isOdd(num) { 
        const n = num % 2;
        return n === 0 ? true : false
    }

    handleCancel() {
        this.props.history.goBack();
    }

    handleContinue() {
        this.props.history.replace(this.props.match.url + "/contact-data");
    }
    render() {
        return(
            <div>
                <CheckoutSummary 
                   ingredients = {this.state.ing} 
                   totalPrice = {this.state.price}
                   contClick = {this.handleContinue}
                   cancClick = {this.handleCancel}
                />
                <Route 
                    path = {this.props.match.url + "/contact-data"} 
                    render = {() => <ContactData ingredients = {this.state.ing} totalPrice = {this.state.price} />}
                />
            </div>
        );
    }
}

export default withRouter(Checkout);
