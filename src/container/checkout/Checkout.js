import React, { Component } from 'react';
import CheckoutSummary from "../../components/order/checkoutSummary/Checkout-Summary";
import {withRouter} from "react-router-dom";
import {DefaultIngredients} from "../burger-builder/ing-price-json";

class Checkout extends Component {
    constructor() {
        super()

        this.state = {
            ing: DefaultIngredients
        }

        this.handleContinue = this.handleContinue.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.isOdd = this.isOdd.bind(this);

    }
    
    componentDidMount() {
        let query = this.props.location.search.split(/[?&=]/);
        query = query.slice(1)
        //console.log(query);

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

        this.setState({ing: ingredient})

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
                   contClick = {this.handleContinue}
                   cancClick = {this.handleCancel}
                />
            </div>
        );
    }
}

export default withRouter(Checkout);
