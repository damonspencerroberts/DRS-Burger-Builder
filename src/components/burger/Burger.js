import React from 'react';
import classes from "./Burger.module.css"
import BurgerIngredient from "./burger-ingredients/Burger-ingredients";

const burger = (props) => {
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = "top-bun"/>
            <BurgerIngredient type = "cheese"/>
            <BurgerIngredient type = "patty"/>
            <BurgerIngredient type = "bottom-bun"/>
        </div>
    )
}

export default burger;