import React, {Fragment as Fr} from 'react';
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => 
    <Fr>
        <Backdrop show = {props.show} backdropClick = {props.backdropClick} />
        <div className = {classes.Modal}
            style = {{
                transform: props.show ? 'translateY(0)' : `${props.translate}`, //'translateY(-100vh)'//'translateY(100vh)'
                opacity: props.show ?  '1' : '0'
            }}>
            {props.children}
        </div>
    </Fr>

export default Modal;
