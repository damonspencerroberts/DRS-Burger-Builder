import React, { Component, Fragment as Fr } from 'react';
import Burger from "../../components/burger/Burger";

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Fr>
                <Burger/>
                <div>Burger Controls</div>
            </Fr>
        )
    }
}