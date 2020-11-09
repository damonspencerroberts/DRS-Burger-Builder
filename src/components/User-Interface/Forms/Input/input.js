import React from 'react';
import classes from "./input.module.css";


const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            className = {classes.InputElement} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            required/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
            className = {classes.InputElement} 
            {...props}
            onChange={props.changed}
            required/>;
            break;
        case ('select'):
            inputElement = (
                <select 
                className = {classes.SelectInput} 
                value = {props.value}
                onChange={props.changed}
                required >
                    {props.elementConfig.options.map(e => {
                        return (
                            <option key = {e.value} value={e.value}>
                                {e.displayValue}
                            </option>);
                    })}
                </select>);
            break;
        default:
            inputElement = <input 
            className = {classes.InputElement} 
            {...props}
            onChange={props.changed}/>;

    }

    return (
        <div className = {classes.Input}>
            <label className = {classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;
