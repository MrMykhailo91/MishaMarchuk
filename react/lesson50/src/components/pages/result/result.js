import React from "react";
import "./result.css";
import { useNavigate } from "react-router-dom";
import Button from "../../button/button";
import imgResult from "../../../constants/image/imgResult.png";
const Result = () => {
	const navigate = useNavigate();
	const goToHome = () => {
		navigate("/");
	};
	const goToCheckout = () => {
		navigate("/checkout");
	};
	return (
		<div className="result">
			<img src={imgResult} alt="imgResult" />
			<h1>Дякую за замовлення!</h1>
			<p>Ваше замовлення прийняте в обробку та незабаром </p>
			<p>вам зателефонує менеджер для уточнення деталей</p>

			<div>
				<Button buttonText={"На головну"} onButtonClick={goToHome} />

				<Button
					buttonText={"Продовжити покупку"}
					onButtonClick={goToCheckout}
				/>
			</div>
		</div>
	);
};
export default Result;
