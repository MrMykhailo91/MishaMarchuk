import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import titleImage from "../../constants/image/Слой 2 1.png";
import {
	FACEBOOK_ICON,
	INSTAGRAM_ICON,
	TELEGRAM_ICON,
} from "../../constants/index";
import Gallery from "./gallery/gallery";
import Question from "./question/question";
import Forms from "./forms/forms";
import Section from "./section/section";
import Article from "./article/article";
import GallerySlider from "../slider/slider";

const Home = () => {
	return (
		<div className="main">
			<div>
				<h1 className="main__title">grann</h1>
				<h5>авторські десерти</h5>
			</div>
			<img src={titleImage} className="main__title-image" />
			<div className="main__title-social">
				<Link to="#">{TELEGRAM_ICON}</Link>
				<Link to="#">{FACEBOOK_ICON}</Link>
				<Link to="#">{INSTAGRAM_ICON}</Link>
			</div>
			<Link className="main__button" to="/catalog">
				до каталогу
			</Link>
			<Section />
			<GallerySlider />
			<Article />
			<Forms />
			<Question />
			<Gallery />
		</div>
	);
};

export default Home;
