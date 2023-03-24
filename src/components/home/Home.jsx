import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"

const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className="home"/>
			<div className="home-box">
				<h1>Our Mission</h1>
				<p>To rebuild the relationship between women and their health, with products rooted in science, and inspired by the female intuition.</p>
				<Link to="/products"><button className='button'>Shop now</button></Link>
			</div>			 
		</div>
		
	)
}


export default Home;