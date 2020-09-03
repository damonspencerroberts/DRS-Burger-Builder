import React, { Component, Fragment as Fr } from 'react';
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/build-controls/Build-Controls";

const EACH_PRICE = {
    lettuce: 0.5,
    bacon: 1.5,
    cheese: 0.5,
    patty: 2
}

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: {
              lettuce: 0,
              bacon: 0,
              cheese: 0,
              patty: 0 
            },
            priceTotal: 4
        }
        this.handleAddIngredients = this.handleAddIngredients.bind(this);
        this.handleLessIngredients = this.handleLessIngredients.bind(this);

    }

    handleAddIngredients = (type) => {
        const curCount = this.state.ingredients[type];
        const newCount = curCount + 1;
        const dupState = {...this.state.ingredients};
        dupState[type] = newCount;
        //at this point we added the new addition to the duplicate array

        const curPrice = this.state.priceTotal;
        const newPrice = EACH_PRICE[type] + curPrice;
        this.setState({ingredients: dupState, priceTotal: newPrice})
    }

    handleLessIngredients = (type) => {
        const curCount = this.state.ingredients[type];
        //if curcount of type is less than 0, return dont do anything
        if (curCount <= 0) {
            return;
        }
        const newCount = curCount - 1;
        const dupState = {...this.state.ingredients};
        dupState[type] = newCount;
        //at this point we added the new addition to the duplicate array

        const curPrice = this.state.priceTotal;
        const newPrice = curPrice - EACH_PRICE[type];
        this.setState({ingredients: dupState, priceTotal: newPrice})
    }


    
    render() {
        //try to put neg values back to 0
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Fr>
                <Burger ingredients = {this.state.ingredients}
                    totalPrice = {this.state.priceTotal}
                />
                <BuildControls 
                    ingAdd = {this.handleAddIngredients}
                    ingDel = {this.handleLessIngredients}
                    //if disable info is less than zero button will be disabled, and value wont cant go lower
                    disInfo = {disableInfo}
                />
            </Fr>
        )
    }
}