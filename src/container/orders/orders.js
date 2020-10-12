import React, { Component, Fragment as Fr} from 'react';
import Order from "../../components/order/order";
import classes from "./orders.module.css";
import axios from "../../axios-orders";
import Loader from "../../components/burger/spinner/Spinner";
import errorHandle from "../../components/error-handler/error-handler";



class Orders extends Component {
    constructor() {
        super()

        this.state = {
            orders: [],
            loader: true
        }
    }

    componentDidMount() {
        axios.get("/orders.json")
        .then(res => {
            const fetchData = [];
            for (let e in res.data) {
                fetchData.push({
                    ...res.data[e],
                    id: e
                })
            }
            console.log(fetchData)
            this.setState({orders: fetchData, loader: false})
        })
        .catch(err => {
            this.setState({loader: false})
        })
    }
    render() {
        const OrdersPage = this.state.loader ? <Loader /> : <div>
                <div className = {classes.Price}><span>Current Orders</span></div>
                {this.state.orders.map(e => (
                    <Order 
                        key = {e.id}
                        ingredients = {e.ingredients}
                        price = {e.price}
                    />
                ))}
                
            </div>
        return (
            <Fr>
             {OrdersPage}
            </Fr>
        );
    }
}

export default errorHandle(Orders, axios);
