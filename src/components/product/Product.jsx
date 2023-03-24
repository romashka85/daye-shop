import React from 'react';
import { Link } from 'react-router-dom';
import "./product.css";

const Product = ({product}) => {	
	return (
		<div className="product">			
			<div className='product-image'>
				<img src={product.productImage} alt="" />				                 
				<Link to={{pathname: `/product/${product.id}`, state: product}}>
					<button className="show-more">More details</button>				  
				</Link>            	
			</div>			
			<div className='product-info'>				
				<div>Tampon box</div>
				<div>{product.price} {product.currency}</div>
			</div>			
		</div>
	)
}

export default Product;