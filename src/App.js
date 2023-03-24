import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import StreamCreate from './streams/streamCreate';
// import StreamEdit from './streams/streamEdit';
// import StreamDelete from './streams/streamDelete';
// import StreamList from './streams/streamList';
// import StreamShow from './streams/streamShow';
import Navigation from './components/navigation/Navigation';
import ProductList from './components/product-list/ProductList';
import About from "./components/about/About";
import Home from "./components/home/Home";
import ProductDetail from './components/product-detail/Product-detail';

import "./App.css"

const App = () => {
	return (				
		<HashRouter>				
			<Navigation/>	
			<div className='app'>
				<Route path="/" exact component={Home}/>
				<Route path="/products" exact component={ProductList}/>
				<Route path="/about" exact component={About}/>
				<Route path="/product/:id" exact component={ProductDetail}/>		
			</div>				
		</HashRouter>		
	)
}

export default App;
