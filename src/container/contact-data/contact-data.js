import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import classes from "./contact.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/burger/spinner/Spinner";
import OrderConfirmation from "../../components/burger/order-confirmation/Order-confirmation";
import Modal from "../../components/User-Interface/Modal/Modal";
import Confetti from "../../components/User-Interface/Confetti/Confetti";
import Input from "../../components/User-Interface/Forms/Input/input";


class ContactData extends Component {
    constructor() {
        super()

        this.state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Full Name'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: ''
                },
                address: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Address'
                    },
                    value: ''
                },
                phoneNumber: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Phone Number'
                    },
                    value: ''
                },
                delivery: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {
                                value: 'delivery',
                                displayValue: 'Delivery'
                            },
                            {
                                value: 'pick-up',
                                displayValue: 'Pick-Up'
                            }]
                    },
                    value: 'delivery'
                }
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
        this.handleFormChange = this.handleFormChange.bind(this);

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

    handleFormChange(event, identifier) {
        const formState = {
            ...this.state.orderForm
        }

        const updateFormElement = {
            ...formState[identifier] 
        }

        updateFormElement.value = event.target.value;

        formState[identifier] = updateFormElement;

        this.setState({orderForm: formState});

        console.log(formState);


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
                name: this.state.orderForm.name.value,
                address: this.state.orderForm.address.value,
                phoneNumber: this.state.orderForm.phoneNumber.value,
                email: this.state.orderForm.email.value,
                deliveryMethod: this.state.orderForm.delivery.value
            }
        }

        /*alert(`name: ${this.state.orderForm.name.value},
        address: ${this.state.orderForm.address.value},
        phoneNumber: ${this.state.orderForm.phoneNumber.value},
        email: ${this.state.orderForm.email.value},
        deliveryMethod: ${this.state.orderForm.delivery.value}`);*/

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
        const formElementsArr = [];
        for (let e in this.state.orderForm) {
            formElementsArr.push({
                id: e,
                config: this.state.orderForm[e]
            });
        }
        console.log(formElementsArr);
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
                        name = {this.state.orderForm.name.value}
                        email = {this.state.orderForm.email.value}
                        address = {this.state.orderForm.address.value}
                        phone = {this.state.orderForm.phoneNumber.value}
                        method = {this.state.orderForm.delivery.value}
                    /> 
                </Modal> : <div className = {classes.Contact}>
                    {this.state.showSpinner ? <Spinner /> : <form onSubmit={this.handleOrder}>
                    <h2>Please Enter Your Contact Information</h2>
                        {formElementsArr.map(e => {
                            //config comes from array we made
                            return <Input 
                            key={e.id}
                            elementType={e.config.elementType} 
                            elementConfig={e.config.elementConfig} 
                            value={e.config.value}
                            //annonymous function to change for each value in form
                            changed={(event) => this.handleFormChange(event, e.id)}/>
                        })}
                        <button 
                            type = "submit" 
                            className = {classes.Button}
                            >Confirm Order</button>
                    </form>}
                </div>}
            </Fragment>
        );
    }
}

export default withRouter(ContactData);
