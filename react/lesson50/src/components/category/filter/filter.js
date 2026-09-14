import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./filter.css";
import Button from "../../button/button";

const Filter = (props) => {
	const { itemsType, setItemsType } = props;

	const handleButtonClick = useCallback((filterType) => {
		setItemsType(filterType);
	}, []);

	// console.log(props)
	return (
		<div className="filter">
			<Button
				itemsType={itemsType}
				filterType="tort"
				type="base"
				buttonText="Торти"
				onButtonClick={handleButtonClick}
			/>
			<Button
				itemsType={itemsType}
				filterType="cacke"
				type="base"
				buttonText="Тістечка"
				onButtonClick={handleButtonClick}
			/>
			<Button
				itemsType={itemsType}
				filterType="sho"
				type="base"
				buttonText="Шу"
				onButtonClick={handleButtonClick}
			/>
			<Button
				itemsType={itemsType}
				filterType="pizza"
				type="base"
				buttonText="Піцца"
				onButtonClick={handleButtonClick}
			/>
		</div>
	);
};

export default Filter;
