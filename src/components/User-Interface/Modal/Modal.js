import React, {Fragment as Fr, Component} from 'react';
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log("[Modal] Updated...")
    }

    render() {
        return(
            <Fr>
                <Backdrop show = {this.props.show} backdropClick = {this.props.backdropClick} />
                <div className = {classes.Modal}
                    style = {{
                        transform: this.props.show ? 'translateY(0)' : `${this.props.translate}`, //'translateY(-100vh)'//'translateY(100vh)'
                        opacity: this.props.show ?  '1' : '0',
                        width: this.props.show ? `${this.props.width}` : null
                    }}>
                    {this.props.children}
                </div>
            </Fr>);
    }
} 
    

export default Modal;
