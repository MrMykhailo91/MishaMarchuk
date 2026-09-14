import React from "react";
import gallery1 from "../../../constants/image/gallery/gallery1.png";
import gallery2 from "../../../constants/image/gallery/gallery2.png";
import gallery3 from "../../../constants/image/gallery/gallery3.png";
import gallery4 from "../../../constants/image/gallery/gallery4.png";
import gallery5 from "../../../constants/image/gallery/gallery5.png";
import gallery6 from "../../../constants/image/gallery/gallery6.png";
import "./gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
	return (
		<div className="gallery">
			<h1>Instagram</h1>
			<div className="gallery__item">
				<div>
					<img src={gallery1} alt="gallery1" />
				</div>
				<div>
					<img src={gallery2} alt="gallery2" />
				</div>
				<div>
					<img src={gallery3} alt="gallery3" />
				</div>
				<div>
					<img src={gallery4} alt="gallery4" />
				</div>
				<div>
					<img src={gallery5} alt="gallery5" />
				</div>
				<div>
					<img src={gallery6} alt="gallery6" />
				</div>
			</div>
			<Link className="gallery__button button" to="/">
				завітати на сторінку
			</Link>
		</div>
	);
};

export default Gallery;
