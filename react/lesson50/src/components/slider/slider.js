import React, { Component } from "react";
import Slider from "react-slick";
import { CACKES } from "../../cackes";
import "./gallerySlider.css";
import { MINICART_ICON } from "../../constants";
export const sliderProps = {
	dots: false,
	infinite: false,
	speed: 1500,
	slideToShow: 4,
	slidesToScroll: 1,
};

const GallerySlider = () => {
	const children = CACKES.map((cacke) => {
		const { id, name, price, weight, imageUrl } = cacke;

		return (
	
			
				<div key={id} className="slider-item">
					<img className="slider-image" src={imageUrl} alt={name} />
					<p className="slider-item-name-container">
						<span>{name}</span>
						<button className="slider-item-basket">{MINICART_ICON}</button>
					</p>
					<p>
						<span>{price} грн</span>
						<span>{weight}</span>
					</p>
				</div>
		
		);
	});

	return (
		<div class="slider-container">
			<h1 className="slider-container-title">Бестселлери</h1>
			<Slider {...sliderProps}>{children}</Slider>
		</div>
	);
};

export default GallerySlider;
