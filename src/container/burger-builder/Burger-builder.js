import React, { Component, Fragment as Fr } from 'react';
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/build-controls/Build-Controls";
import Modal from "../../components/User-Interface/Modal/Modal";
import OrderSummary from "../../components/burger/order-summary/Order-Summary";
import Confetti from "../../components/User-Interface/Confetti/Confetti";
import OrderConfirmation from "../../components/burger/order-confirmation/Order-confirmation";
import axios from "../../axios-orders";
import {EachPrice, DefaultIngredients} from "./ing-price-json";
import StartOrder from "../../components/burger/start-order/start-order";
import Spinner from "../../components/burger/spinner/Spinner";
import errorHandler from "../../components/error-handler/error-handler";



const EACH_PRICE = EachPrice;

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: null,
            priceTotal: 4.00,
            canPurchase: false,
            showOrderSummary: false,
            burgerScale: false,
            showConfirmation: false,
            startingOrder: false,
            showSpinner: false,
            error: null
        }
        this.handleAddIngredients = this.handleAddIngredients.bind(this);
        this.handleLessIngredients = this.handleLessIngredients.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCanPurchase = this.handleCanPurchase.bind(this);
        this.handleOs = this.handleOs.bind(this);
        this.handleBurgerScale = this.handleBurgerScale.bind(this);
        this.handleFinalPurchase = this.handleFinalPurchase.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.startOrder = this.startOrder.bind(this);
    }

    componentDidMount() {
        axios.get('https://drs-burger.firebaseio.com/defaultIngredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: error})
        });

    }

    startOrder() {
        this.setState({startingOrder: true})    
    }

    showConfirm() {
        this.setState({showConfirmation: !this.state.showConfirmation})
        if (this.state.showConfirmation) {
            this.handleClear()
        }

        this.setState({ingredients: DefaultIngredients});
    }

    handleFinalPurchase() {
        const dupState = {
            ...this.state.ingredients
        }

        let newIng = {};
        // eslint-disable-next-line array-callback-return
        Object.keys(dupState).map(e => {
            if ( dupState[e] > 0 ) {
                newIng[e] = dupState[e]
            }
        });

        const order = {
            ingredients: newIng,
            price: this.state.priceTotal,
            customer: {
                name: 'Henry Kembel',
                address: {
                    houseNumber: '44',
                    street: "John Doe Ave",
                    zip: "47899",
                    country: "USA"
                },
                email: "hkem@gmail.com",
                phoneNum: "76781893585",
                rating: 8,
                message: "Thank you for the delicious burger.",
                method: "delivery"
            }
        }
        this.setState({showSpinner: true})

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({showSpinner: false, canPurchase: false})
            })
                
            .catch(error => {
                this.setState({showSpinner: false, canPurchase: false});
        });
        this.setState({showOrderSummary: !this.state.showOrderSummary});  
        this.showConfirm(); 
    }

    handleBurgerScale() {
        this.setState({burgerScale: !this.state.burgerScale})
    }

    handleOs() {
        this.setState({showOrderSummary: !this.state.showOrderSummary});
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

        let burgerSt = this.state.error ? <p>
            We appologize! There is an issue loading the ingredients!
        </p> : <Spinner />
        
        if (this.state.ingredients) {
           burgerSt = (
            <Fr>
                <Burger 
                    show
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

                {!this.state.startingOrder ? <StartOrder startBtn = {this.startOrder} /> : <BuildControls 
                    ingPrice = {this.state.priceTotal.toFixed(2)}
                    ingAdd = {this.handleAddIngredients}
                    ingDel = {this.handleLessIngredients}
                    ingClear = {this.handleClear}
                    //if disable info is less than zero button will be disabled, and value wont cant go lower
                    ingOrder = {this.handleOs}
                    disInfo = {disableInfo}
                    disOrder = {this.state.canPurchase}
                />}
            </Fr>) 
        }
        
        return (
            <Fr>
                {this.state.showConfirmation ? <Confetti /> : null}
                    {burgerSt}
                    <Modal 
                        show = {this.state.showConfirmation} 
                        backdropClick = {this.showConfirm}
                        translate = 'translateX(-100vh)'
                        width = {screenSmall ? '250px' : "450px"}
                        >   
                        {this.state.showSpinner ? <Spinner /> : <OrderConfirmation 
                            showConfirm = {this.showConfirm}
                            priceTotal = {this.state.priceTotal.toFixed(2)}
                        />}
                    </Modal>
            </Fr>
        )
    }
}

export default errorHandler(BurgerBuilder, axios);

