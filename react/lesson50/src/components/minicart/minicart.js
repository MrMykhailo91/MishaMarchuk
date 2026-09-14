import "./minicart.css";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { Fragment, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const Minicart = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate("/checkout");
	};

	return (
		<div className="minicart-wrapper">
			{cartItems.length ? (
				<Fragment>
					{cartItems.map((item) => (
						<CartItem item={item} key={item.id} />
					))}
					<Button
						buttonText={"Перейти до замовлення"}
						onButtonClick={goToCheckout}
					/>
				</Fragment>
			) : (
				<span className="minicart-empty-message">Ваша корзина пуста</span>
			)}
		</div>
	);
};

export default Minicart;
