import React from "react";
import "./section.css";
import { Link } from "react-router-dom";
import imgSection1 from "../../../constants/image/section/imgSection1.png";
import imgSection2 from "../../../constants/image/section/imgSection2.png";
import imgSection3 from "../../../constants/image/section/imgSection3.png";
import imgSection4 from "../../../constants/image/section/imgSection4.png";

const Section = () => {
	return (
		<div className="section">
			<div className="section__item">
				<div>
					<img src={imgSection1} alt="imgSection1" />
					<Link>
						<button className="section__button">торти</button>
					</Link>
				</div>
				<div>
					<img src={imgSection2} alt="imgSection2" />
					<Link>
						<button className="section__button">шу</button>
					</Link>
				</div>
				<div>
					<img src={imgSection3} alt="imgSection3" />
					<Link>
						<button className="section__button">тістечка</button>
					</Link>
				</div>
				<div>
					<img src={imgSection4} alt="imgSection4" />
					<Link>
						<button className="section__button">піца</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Section;
