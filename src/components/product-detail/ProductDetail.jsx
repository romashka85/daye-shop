import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import X2JS from "x2js";
import Checkbox from "../check-box/check-box";
import "./product-detail.css";

const ProductDetail = () => {
	const [results, setResults] = useState([]);
	const [checkedOne, setCheckedOne] = useState(false);
	const [checkedTwo, setCheckedTwo] = useState(false);

	const handleChangeOne = () => {
	  setCheckedOne(!checkedOne);
	};

	const handleChangeTwo = () => {
	  setCheckedTwo(!checkedTwo);
	};

	const addToCart = (item) => {	
		console.log("item", item);
	};

	useEffect(() => {
		const fetchProducts = async() => {
			const response = await axios.get("https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app/");
			const newResult = response.data.map((item, index) => {
				return { ...item, id: index };
			});

			setResults(newResult);
		  };
		  fetchProducts();
	}, []);

	const convertXml = (xmlText) => {
		const x2js = new X2JS();
		const jsonObj = x2js.xml2js(xmlText);
		return jsonObj;
	};

	const { id } = useParams();
	const item = results.find(item => item.id === parseInt(id));
	let tampons = item?.tampons ? item?.tampons : item?.tapons;
	if (typeof tampons === "string") {
		tampons = convertXml(tampons);
		tampons = tampons?.tapons.tampon;
	}	

	return (
		<div className="product-detail">
			<img src={item?.productImage} alt="" />
			<div className='product-detail-info'>
				<h2>Tampon box</h2>
				<p className='product-detail-description'>Fully-sustainable organic tampons with a no-shed protective sleeve and an optional CBD coating for the days when your period is cramping your style.</p>
				<div className='product-detail-prise'>prise: {item?.price} {item?.currency}</div>
				{(tampons && Array.isArray(tampons)) &&
				<div>
					<h3>Choose box:</h3>
					<div className='box-wrapper'>
						<div className='box'>
							<div className='box-header'>
								<Checkbox
									label={`${tampons[0].amount} tampons`}
									value={checkedOne}
									onChange={handleChangeOne}
								/>
							</div>
							<span className='box-line'>size: </span>
							<span>{tampons[0].size}</span><br/>
							<span className='box-line'>coating: </span>
							<span>{tampons[0].coating}</span>
						</div>
						<div className='box'>
							<div className='box-header'>
								<Checkbox
									label={`${tampons[1].amount} tampons`}
									value={checkedTwo}
									onChange={handleChangeTwo}
								/>
							</div>
							<span className='box-line'>size: </span>
							<span>{tampons[1].size}</span><br/>
							<span className='box-line'>coating: </span>
							<span>{tampons[1].coating}</span>
						</div>
					</div>
				</div>}
				{(tampons && !Array.isArray(tampons)) &&
					<div className='box'>	
						<span className='box-line'>amount: </span>
						<span>{tampons.amount}</span><br/>					
						<span className='box-line'>size: </span>
						<span>{tampons.size}</span><br/>
						<span className='box-line'>coating: </span>
						<span>{tampons.coating}</span>
					</div>
				}
				<button onClick={() => addToCart(item)}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductDetail;
