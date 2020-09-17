import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from "./container/burger-builder/Burger-builder";
import Checkout from "./container/checkout/Checkout";
import { Route, Switch } from "react-router-dom";


class App extends Component{
	
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path = "/burger-checkout" component = {Checkout} />
						<Route path = "/" component = {BurgerBuilder} exact />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
