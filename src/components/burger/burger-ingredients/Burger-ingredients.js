import React, { Component } from 'react';

import ingStyles from "./Burger-ingredients.modules.css";

class BurgerIngredients extends Component {

    render() {
        let ingredient = null;

        switch(props.type) {
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

            default:
                ingredient = null;

        }
        return ingredient;
        }
}
    
