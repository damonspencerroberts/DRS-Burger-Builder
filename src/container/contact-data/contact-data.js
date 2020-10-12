import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import classes from "./contact.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/burger/spinner/Spinner";
import OrderConfirmation from "../../components/burger/order-confirmation/Order-confirmation";
import Modal from "../../components/User-Interface/Modal/Modal";
import Confetti from "../../components/User-Interface/Confetti/Confetti";


class ContactData extends Component {
    constructor() {
        super()

        this.state = {
            customer: {
                firstName: '',
                lastName: '',
                houseNumber: '',
                address: {
                    street: '',
                    zip: '',
                    country: ''
                },
                email: '',
                phoneNum: '',
                message: '',
                method: ''
            },
            price: null,
            ingredients: null,
            showSpinner: false,
            showConfirmation: false
        }
        this.handleOrder = this.handleOrder.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);

    }

    handleRedirect() {
        this.setState({showConfirmation: !this.state.showConfirmation})
        this.props.history.push('/');
    }

    showConfirm() {
            this.setState({showConfirmation: !this.state.showConfirmation})
            this.handleClear()
    }

    handleClear() {
        this.setState({ingredients: null});
    }

    handleName(event) {
        /*handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
          }*/
    }
    
    handleOrder(event) {
        event.preventDefault();
        const ing = this.props.ingredients;
        const dupState = {
            ...ing
        }

        let newIng = {};
        // eslint-disable-next-line array-callback-return
        Object.keys(dupState).map(e => {
            if ( dupState[e] > 0 ) {
                newIng[e] = dupState[e]
            }
        });

        const newPrice = this.props.totalPrice;
        this.setState({price: newPrice});

        const order = {
            ingredients: newIng,
            price: newPrice,
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

        this.showConfirm(); 
    }

    render() {
        const screenSmall = window.innerWidth < 499;
        return ( <Fragment>
            {this.state.showConfirmation ? <Confetti /> : null}
            {this.state.showConfirmation ? 
                <Modal 
                        show = {this.state.showConfirmation} 
                        backdropClick = {this.showConfirm && this.handleRedirect}
                        translate = 'translateX(-100vh)'
                        width = {screenSmall ? '250px' : "450px"}
                        > 
                    <OrderConfirmation 
                        showConfirm = {this.handleRedirect}
                        priceTotal = {this.state.price}
                    /> 
                </Modal> : <div className = {classes.Contact}>
                    {this.state.showSpinner ? <Spinner /> : <form>
                    <h2>Please Enter Your Contact Information</h2>
                        <input type = "text" placeholder = "First Name"/>
                        <input type = "text" placeholder = "Last Name"/>
                        <div className = {classes.Address}>
                            <h4>Address</h4>
                            <div className = {classes.Addy}>
                                <input type = "text" placeholder = "Street Address" />
                                <input type = "text" placeholder = "Zip Code"/>
                            </div>
                            <div className = {classes.Addy}>
                                <input type = "text" placeholder = "City" />
                                <input type = "text" placeholder = "Country" />
                            </div>
                        </div>
                        <div className = {classes.More}>
                            <input type = "email" placeholder = "E-Mail" />
                            <input type = "text" placeholder = "Phone Number" />
                            <select id="method" name="Order Method">
                                <option>Delivery</option>
                                <option>Pick-Up</option>
                            </select>
                        </div>
                        <button 
                            type = "submit" 
                            className = {classes.Button}
                            onClick = {this.handleOrder}
                            >Confirm Order</button>
                    </form>}
                </div>}
            </Fragment>
        );
    }
}

export default withRouter(ContactData);
