import React, {Fragment as Fr, Component} from 'react';

import Modal from "../User-Interface/Modal/Modal";
import classes from "./error-handler.module.css";


const errorHandler = ( WrappedComp, axios ) => {
    return class extends Component {
        state = {
            error: null
        }
        

        //used to handle axios errors
        componentWillMount() {
            //sets state back to null if request success
            this.reqInt = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            //if there is error will set state to error
            this.resInt = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.resInt);
            axios.interceptors.request.eject(this.reqInt);
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
