import React, { Component, Fragment as Fr } from 'react';
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/build-controls/Build-Controls";

const EACH_PRICE = {
    lettuce: 0.50,
    bacon: 1.50,
    pickle: 0.25,
    cheese: 0.50,
    patty: 2.00,
    tomato: 0.25,
    onion: 0.25
}

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: {
              lettuce: 0,
              bacon: 0,
              tomato: 0, 
              pickle: 0,
              onion: 0,
              cheese: 0,
              patty: 0
            },
            priceTotal: 4.00
        }
        this.handleAddIngredients = this.handleAddIngredients.bind(this);
        this.handleLessIngredients = this.handleLessIngredients.bind(this);
        this.handleClear = this.handleClear.bind(this);
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
        this.setState({ingredients: dupState, priceTotal: newPrice.toFixed(2)})
    }

    handleClear() {
        const arr = [];
        Object.keys(this.state.ingredients).map(e => arr.push(e));
        const dupState = {...this.state.ingredients};
        arr.map(e => dupState[e] = 0);
        this.setState({ingredients: dupState, priceTotal: 4.00});
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
                    ingClear = {this.handleClear}
                    //if disable info is less than zero button will be disabled, and value wont cant go lower
                    disInfo = {disableInfo}
                />
            </Fr>
        )
    }
}