import React, { useRef } from "react";
import "./checkout.css";
import CheckoutItem from "./checkout-item";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	const { cartTotal, cartItems, removeItemFromCart } = useContext(CartContext);
	const ref = useRef();
	const navigate = useNavigate();

	const goToResult = () => {
		navigate("/result");
	};
	return (
		<>
			<h1 className="checkout-title">Оформлення замовлення </h1>
			<h2 className="checkout-text">Контакти:</h2>
			<div className="checkout-container">
				<form className="checkout-form">
					<label>
						<input type="text" placeholder="Ім'я" />
					</label>
					<label>
						<input type="text" placeholder="Номер телефону" />
					</label>
					<label>
						<input type="email" placeholder="E-mail" />
					</label>
					<label>
						<input
							type="data"
							ref={ref}
							placeholder="Дата доставки"
							onFocus={() => (ref.current.type = "date")}
							onBlur={() => (ref.current.type = "date")}
						/>
					</label>
					<h2>Спосіб доставки</h2>
					<label>
						<input type="radio" name="delivery" />
						Самовивіз з Печерського р-ну, м. Київ.
					</label>
					<label>
						<input type="radio" name="delivery" />
						На таксі &#40;за тарифами служби таксі&#41;
					</label>
					<label>
						<input type=""></input>
					</label>
					<h2>Спосіб оплати</h2>
					<label>
						<input type="radio" name="payment" />
						Готівка
					</label>
					<label>
						<input type="radio" name="payment" />
						Liqpay
					</label>
					<textarea placeholder="Додати коментар" />
					Всього до сплати: {cartTotal}
					<button onClick={goToResult} className="checkout-button" type="submit">
						
						оформити замовлення
					</button>
				</form>
				<div className="checkout-container__checkout">
					<div>Всього до сплати {cartTotal} грн</div>
					<div>
						Ваше замовлення
						{cartItems.length &&
							cartItems.map((item) => (
								<CheckoutItem item={item} key={item.id} />
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
