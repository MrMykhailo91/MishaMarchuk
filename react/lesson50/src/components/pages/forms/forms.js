import React from "react";
import "./forms.css";
import imgForm from "./image/DSC064401.png";
const Forms = () => {
	return (
		<div className="response" style={{ backgroundImage: `url(${imgForm})` }}>
			<div className="response-title">
				<h1>Давайте зробимо <br/>щось унікальне разом!</h1>
				<p>
					Ви можете замовити свій власний рецепт десерту, який вам буде до
					вподоби. Заповніть заявку та я зв’яжусь з вами, аби обговорити деталі
					замовлення.
				</p>
			</div>
			<form>
				<label>
					<input type="text" placeholder="Ім'я" />
				</label>
				<label>
					<input type="tel" placeholder="Номер телефону" />
				</label>
				<label>
					<textarea cols="40" rows="10" placeholder="Опишіть Ваші побажання:"/>
				</label>
				<input type="submit" />
				
			</form>
		</div>
	);
};

export default Forms;
