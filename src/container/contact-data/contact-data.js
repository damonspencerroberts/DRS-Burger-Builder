import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import classes from "./contact.module.css";

class ContactData extends Component {
    constructor() {
        super()

        this.state = {
            customer: {
                name: '',
                address: {
                    houseNumber: '',
                    street: '',
                    zip: '',
                    country: ''
                },
                email: '',
                phoneNum: '',
                rating: '',
                message: '',
                method: ''
            }
        }
    }

    render() {
        return (
                <div className = {classes.Contact}>
                    <form>
                    <h2>Please Enter Your Contact Information</h2>
                        <input type = "text" placeholder = "First Name"/>
                        <input type = "text" placeholder = "Last Name" />
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
                        <button type = "submit" className = {classes.Button}>Confirm Order</button>
                    </form>
                </div>
        );
    }
}

export default withRouter(ContactData);
