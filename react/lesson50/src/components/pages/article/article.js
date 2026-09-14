import React from "react";
import "./article.css";
import imgArticle from "../../../constants/image/article/AnnaKostromska.png";
const Article = () => {
	return (
		<article className="article" id="article">
			<div>
				<img src={imgArticle} alt="imgArticle" />
			</div>
			<div className="article__title">
				<h1>Про мене</h1>
				<h4>Анна Кострома</h4>
				<p>Засновниця кондитерської Grann Pastry</p>
				<p>
					<p>Від хобі до власної справи.</p>
					<p>
						Я закінчила DGF International Culinary School в Києві, а згодом
						навчалася в одній з найвідоміших шкіл готельного сервісу і кулінарії
						в світі «Le Cordon Bleu» (Франція).Свою справу почала після того, як
						здобула досвід і працювала в одному з найбільших кондитерських цехів
						Грузії (1500 кв.м.).
					</p>
					<p>
						Наразі започаткувала особистий бренд і будую власний кондитерський
						цех.Моя робота мене надихає. Завдяки моїм солодощам, я можу дарувати
						щасливі моменти для вас!
					</p>
				</p>
			</div>
		</article>
	);
};

export default Article;
