import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import imgLogo from "../../constants/logoGrann.png";
import { WHATSAPP_ICON, INSTAGRAM_ICON, TELEGRAM_ICON } from "../../constants";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper">
				<address className="address">
					<p>
						<Link to="#">с.Хотів, вул. Партизанська 1А</Link>
					</p>
					<p>
						<Link to="mailto:kostromaganna@gmail.com">
							Email: kostromaganna@gmail.com
						</Link>
					</p>
					<p>
						<Link to="tel:+380999876240">Tel: +38(099) 987 62 40</Link>
					</p>
				</address>

				<Link to="/">
					<img className="footer_logo-icon" src={imgLogo} alt="logoGrann" />
				</Link>

				<div className="footer__social">
					<div>
						<Link to="#">{INSTAGRAM_ICON}</Link>
						<Link to="#">{TELEGRAM_ICON}</Link>
						<Link to="#">{WHATSAPP_ICON}</Link>
					</div>
					<p>Політика конфіденційності</p>
					<p>Договір оферти</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
