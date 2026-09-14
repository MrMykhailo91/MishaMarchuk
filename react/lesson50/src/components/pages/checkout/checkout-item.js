import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";

const CheckoutItem = ({ item }) => {
	const { clearItemFromCart } = useContext(CartContext);

	const removeItemHandler = () => clearItemFromCart(item);

	return (
		<div>
			<p>{item.name}</p>
			<p>{item.price}грн</p>
			<button onClick={removeItemHandler}>x</button>
		</div>
	);
};

export default CheckoutItem;
