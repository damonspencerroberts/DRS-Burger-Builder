import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from "./container/burger-builder/Burger-builder";
import Checkout from "./container/checkout/Checkout";


class App extends Component{
	
	render() {
		return (
			<div>
				<Layout>
					<BurgerBuilder />
					<Checkout />
				</Layout>
			</div>
		);
	}
}

export default App;
