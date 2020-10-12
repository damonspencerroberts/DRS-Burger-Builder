import React from 'react';
import Order from "../../components/order/order";

export default class Orders extends React.Component {
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}