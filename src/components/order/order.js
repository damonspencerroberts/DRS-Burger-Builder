import React from 'react';
import classes from "./order.module.css";

const order = (props) => {
    const ingredients = [];
    for (let ingName in props.ingredients) {
        ingredients.push({
            name: ingName,
            amount: props.ingredients[ingName]
        });
    }

    const ingOutput = ingredients.map(e => {
        return <span 
        className = {classes.Ingredients}
        key = {e.name}>{e.name} ({e.amount})</span>
    });
    return (
        <div className = {classes.Order}>
            <p>Ingredients: {ingOutput}</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    );
}

export default order;
