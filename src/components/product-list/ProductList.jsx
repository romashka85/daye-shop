import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import "./product-list.css";

const ProductList = (prop) => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {   
			const response = await axios.get('https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app/'); 
			const newResult = response.data.map((item, index) => {
				return {...item, id: index}
			} )
			setResults(newResult);		 
		  };
		  fetchProducts();
	}, []);	
	
	return (		
		<div className="products">
			{results.map((product, index) => <Product product={product} key={index}/>)}			
		</div>
	)
}

export default ProductList;