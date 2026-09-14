import { Fragment, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { MINICART_ICON } from "../../constants";
import "./minicartButton.css";

const MinicartButton = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<Fragment>
			<button onClick={toggleIsCartOpen} className="basket">
				{MINICART_ICON}
			</button>
			{cartCount > 0 && <span className="counter">{cartCount}</span>}
		</Fragment>
	);
};

export default MinicartButton;
