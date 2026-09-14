import React, { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import { MINICART_ICON } from "../../../constants";
import "./item.css";

const Item = (props) => {
	const { id, name, price, weight, imageUrl } = props;

	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => addItemToCart(props);

	// console.log(props)

	return (
		<div key={id} className="gallery-item">
			<img className="gallery-image" src={imageUrl} alt={name} />
			<p className="gallery-item-name-container">
				<span className="gallery-item-name">{name}</span>
				<button className="gallery-item-basket" onClick={addProductToCart}>
					{MINICART_ICON}
				</button>
			</p>
			<p>
				<span>{price} грн</span>
				/&nbsp;
				<span>{weight}</span>
			</p>
		</div>
	);
};

export default Item;
