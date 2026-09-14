import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import imgLogo from "../../constants/logoGrann.png";
import "./header.css";
import MinicartButton from "../minicart/minicartButton";
import Minicart from "../minicart/minicart";
import { CartContext } from "../../context/cart.context";

const Header = () => {
	const { isCartOpen } = useContext(CartContext);

	console.log(isCartOpen);
	return (
		<Fragment>
			<header className="header">
				<div className="wrapper">
					<div className="header__one-section">
						<ul>
							<li>
								<Link to="/">бестселлер</Link>
							</li>
							<li>
								<Link to="/catalog">каталог</Link>
							</li>
						</ul>
					</div>

					<Link to="/">
						<img className="logo-icon" src={imgLogo} alt="logoGrann" />
					</Link>

					<div className="header__two-section">
						<ul>
							<li>
								<Link to="/">доставка</Link>
							</li>
							<li>
								<Link id="article"> про мене </Link>
							</li>
						</ul>

						<MinicartButton />
						{isCartOpen && <Minicart />}
					</div>
				</div>
			</header>
			<Outlet />
		</Fragment>
	);
};

export default Header;
