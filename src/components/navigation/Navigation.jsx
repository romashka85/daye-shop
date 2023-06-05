import React from 'react';
import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth';
import "./navigation.css";

const Navigation = () => {
	return (
		<nav className="zone sticky">
			<ul className="main-nav">
				<li><Link to="/" className='header-logo'>Daye</Link></li>
				<li><Link to="/about" >About</Link></li>
				<li><Link to="/products">Products</Link></li>
				<li><Link to="/examples">Examples</Link></li>
				<div className="">
					{/* <Link to="/" className=''>basket</Link> */}
					{/* <GoogleAuth /> */}
				</div>
			</ul>
			
		</nav>
	)
}


export default Navigation;