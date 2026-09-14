import React from "react";
import Item from "./item";
import { CACKES } from "../../../cackes";
import "./list.css";

const List = (props) => {
	const { itemsType } = props;

	const children = CACKES.map((item) => {
		if (itemsType && itemsType === item.type) {
			console.log("props", item);
			return <Item {...item} />;
		}

		if (!itemsType) {
			return <Item {...item} />;
		}
	});

	return <div className="gallery-root">{children}</div>;
};

export default List;
