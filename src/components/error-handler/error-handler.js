import React, {Fragment as Fr, Component} from 'react';

import Modal from "../User-Interface/Modal/Modal";
import classes from "./error-handler.module.css";


const errorHandler = ( WrappedComp, axios ) => {
    return class extends Component {
        state = {
            error: null
        }
        

        //used to handle axios errors
        componentDidMount() {
            //sets state back to null if request success
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            //if there is error will set state to error
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        handleErrorConfirm = () => {
            this.setState({error: null})
        }
        render() {
           
           return (
            <Fr>
                <Modal 
                    show = {this.state.error}
                    backdropClick = {this.handleErrorConfirm}
                >
                <div className = {classes.Error}>
                    {this.state.error ? this.state.error.message : null}
                </div>
                </Modal>
                <WrappedComp {...this.props} /> 
            </Fr>
            );
       } 
    }
}

export default errorHandler;
