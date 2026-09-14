import React, { useState } from "react";
import Filter from "./filter";
import List from "./list/list";
import Pagination from "./pagination/pagination";
import "./categoryContent.css";
import { Link } from "react-router-dom";

const CategoryContent = (props) => {
	const [itemsType, setItemsType] = useState(null);
	const [isActiveType, setActiveType] = useState(null);

	return (
		<div className="category">
			<>
				<div className="category-transition">
					<Link to={"/"}>Головна</Link>
					&#47;
					<Link to={"#"}>Каталог</Link>
				</div>
			</>
			<h1>Каталог</h1>

			<Filter itemsType={itemsType} setItemsType={setItemsType} />
			<List itemsType={itemsType} />
			<Pagination />
		</div>
	);
};

export default CategoryContent;
