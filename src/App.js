import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from "./container/burger-builder/Burger-builder";
import Checkout from "./container/checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import ContactData from "./container/contact-data/contact-data";


class App extends Component{
	
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path = "/burger-checkout/contact-data" component = {ContactData} />
						<Route path = "/burger-checkout" component = {Checkout} />
						<Route path = "/" component = {BurgerBuilder} exact />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
