import React, { Component, Fragment as Fr } from 'react';
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/build-controls/Build-Controls";
import Modal from "../../components/User-Interface/Modal/Modal";
import OrderSummary from "../../components/burger/order-summary/Order-Summary";
import Confetti from "../../components/User-Interface/Confetti/Confetti";
import OrderConfirmation from "../../components/burger/order-confirmation/Order-confirmation";


const EACH_PRICE = {
    lettuce: 0.50,
    bacon: 1.50,
    egg: 1.25,
    pickle: 0.25,
    cheese: 0.50,
    chicken: 2.50,
    patty: 2.50,
    tomato: 0.25,
    onion: 0.50,
    mustard: 0.25,
    bbq: 0.25,
    ketchup: 0.25,
    mayo: 0.25
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: {
              lettuce: 0,
              mustard: 0,
              bbq: 0,
              ketchup: 0,
              mayo: 0,
              bacon: 0,
              egg: 0,
              tomato: 0, 
              pickle: 0,
              onion: 0,
              cheese: 0,
              chicken: 0,
              patty: 0
            },
            priceTotal: 4.00,
            canPurchase: false,
            showOrderSummary: false,
            burgerScale: false,
            showConfirmation: false
        }
        this.handleAddIngredients = this.handleAddIngredients.bind(this);
        this.handleLessIngredients = this.handleLessIngredients.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCanPurchase = this.handleCanPurchase.bind(this);
        this.handleOs = this.handleOs.bind(this);
        this.handleBurgerScale = this.handleBurgerScale.bind(this);
        this.handleFinalPurchase = this.handleFinalPurchase.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
    }

    showConfirm() {
        this.setState({showConfirmation: !this.state.showConfirmation})
        if (this.state.showConfirmation) {
            this.handleClear()
        }
    }

    handleFinalPurchase() {
        this.setState({showOrderSummary: !this.state.showOrderSummary});
        this.showConfirm(); 
    }

    handleBurgerScale() {
        this.setState({burgerScale: !this.state.burgerScale})
    }

    handleOs() {
        this.setState({showOrderSummary: !this.state.showOrderSummary})
    }

    handleCanPurchase(dupState) {
        const sum = Object.keys(dupState)
        .map(e => {
            return dupState[e];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({canPurchase: sum > 0})
        
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
        this.handleCanPurchase(dupState);

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
        this.handleCanPurchase(dupState);

    }

    handleClear() {
        const arr = [];
        Object.keys(this.state.ingredients).map(e => arr.push(e));
        const dupState = {...this.state.ingredients};
        arr.map(e => dupState[e] = 0);
        this.setState({ingredients: dupState, priceTotal: 4.00});
        this.handleCanPurchase(dupState);

    }

    render() {
        //try to put neg values back to 0
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        const screenSmall = window.innerWidth < 499;

        return (
            <Fr>
                {this.state.showConfirmation ? <Confetti /> : null}
                <Burger 
                    ingredients = {this.state.ingredients}
                    totalPrice = {this.state.priceTotal.toFixed(2)}
                    burgerClick = {this.handleBurgerScale}
                    scaleBurger = {this.state.burgerScale}
                    />

                <Modal 
                    show = {this.state.showOrderSummary}
                    backdropClick = {this.handleOs}
                    translate = 'translateY(-100vh)'
                    >
                    <OrderSummary 
                        ingState = {this.state.ingredients} 
                        priceState = {this.state.priceTotal}
                        exitOsClick = {this.handleOs}
                        finalClick = {this.handleFinalPurchase}
                    />
                </Modal>

                <BuildControls 
                    ingPrice = {this.state.priceTotal.toFixed(2)}
                    ingAdd = {this.handleAddIngredients}
                    ingDel = {this.handleLessIngredients}
                    ingClear = {this.handleClear}
                    //if disable info is less than zero button will be disabled, and value wont cant go lower
                    ingOrder = {this.handleOs}
                    disInfo = {disableInfo}
                    disOrder = {this.state.canPurchase}
                />
                
                {this.state.showConfirmation ? <Modal 
                        show = {this.state.showConfirmation} 
                        backdropClick = {this.showConfirm}
                        translate = 'translateX(-100vh)'
                        width = {screenSmall ? '250px' : "450px"}
                        >   
                        <OrderConfirmation 
                            showConfirm = {this.showConfirm}
                            priceTotal = {this.state.priceTotal.toFixed(2)}
                        />
                        </Modal> : null}
            </Fr>
        )
    }
}

export default BurgerBuilder;

