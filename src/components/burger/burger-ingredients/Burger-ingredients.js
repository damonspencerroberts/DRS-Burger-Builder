import React, { Component, Fragment as Fr } from 'react';
import PropTypes from "prop-types";
import ingStyles from "./Burger-ingredients.module.css";

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case("bottom-bun"):
            ingredient = <div className = {ingStyles.BreadBottom}></div>;
            break;

            case("top-bun"):
            ingredient = (
                <div className = {ingStyles.BreadTop}>
                    <div className = {ingStyles.Seeds1}></div>
                    <div className = {ingStyles.Seeds2}></div>
                </div>);
            break;

            case('patty'):
            ingredient = <div className = {ingStyles.Meat} ></div>
            break;

            case('lettuce'):
            ingredient = <div className = {ingStyles.Salad} ></div>
            break;

            case('cheese'):
            ingredient = <div className = {ingStyles.Cheese} ></div>
            break;

            case('bacon'):
            ingredient = <div className = {ingStyles.Bacon} ></div>
            break;

            case('egg'):
            ingredient = <div className = {ingStyles.Egg}><div className = {ingStyles.Yolk}></div></div>
            break;

            case('pickle'):
            ingredient = <Fr><div className = {ingStyles.Pickles}></div>
                <div className = {ingStyles.Pickles}></div>
                <div className = {ingStyles.Pickles}></div>
                <div className = {ingStyles.Pickles}></div>
                <div className = {ingStyles.Pickles}></div></Fr>
            break;

            case('onion'):
            ingredient = <Fr>
            <div className = {ingStyles.Onion}></div>
            <div className = {ingStyles.Onion}></div>
            </Fr>
            break;

            case('tomato'):
            ingredient = <div className = {ingStyles.Tomato}></div>
            break;

            case('chicken'):
            ingredient = <div className = {ingStyles.Chicken}></div>
            break;

            case('bbq'):
            ingredient = <div className = {ingStyles.Bbq}></div>
            break;

            case('mustard'):
            ingredient = <div className = {ingStyles.Mustard}></div>
            break;

            case('ketchup'):
            ingredient = <div className = {ingStyles.Ketchup}></div>
            break;

            case('mayo'):
            ingredient = <div className = {ingStyles.Mayo}></div>
            break;

            default:
                ingredient = null;

        }
        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;
    
