import React from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from "./container/burger-builder/Burger-builder";

function App() {
	return (
		<div>
			<Layout>
				<BurgerBuilder/>
			</Layout>
		</div>
	);
}

export default App;
