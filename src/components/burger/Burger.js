import React, {Component, Fragment as Fr} from 'react';
import classes from "./Burger.module.css"
import BurgerIngredient from "./burger-ingredients/Burger-ingredients";
import ExitButton from "./exit-button/Exit-button";


/**
 * This takes the state object ingredients from burger builder uses the keys.
 * From there we map over it and for each key (e) we will return an array of the key. Aka duplicate how many there are.
 * Then we map again and find the index and return the element to the burger ingredient switch.
 * Finds it then adds it to the burger builder page.
 */

export default class Burger extends Component {
        //if no ingredients are found displays message to user
    render() {
        const transIngredients = Object.keys(this.props.ingredients)
        .map(e => {
            return [...Array(this.props.ingredients[e])].map((_, i) => {
                return <BurgerIngredient key = {e + i + "ichiban0302"} type = {e}/>
            });
        })
        .reduce((arr, el) => {return arr.concat(el)}, []);
        //reduces allows us to transform an array into something else

        const transLength = transIngredients.length;
                
        return  <Fr>
                    {this.props.show ? <div className = {classes.Price}><span>Price: ${this.props.totalPrice}</span></div> : null }
                    <div className = {`${classes.Burger} ${this.props.scaleBurger ? classes.ScaleBurger : null}`} 
                    onClick = {this.props.burgerClick}>
                        <BurgerIngredient type = "top-bun"/>
                            {transLength === 0 ? 
                                <h2 className = {classes.BurgerWarning}>{"Please Add Some Ingredients".toUpperCase()}</h2>
                                :
                                transIngredients}
                        <BurgerIngredient type = "bottom-bun"/>
                        {this.props.scaleBurger ? <ExitButton exitClick = {this.props.burgerClick}
                        className = {classes.Btn}>X</ExitButton> : null}
                    </div>
                </Fr>
    }
}
    

