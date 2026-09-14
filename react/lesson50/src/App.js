import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Category from "./components/pages/category";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Checkout from "./components/pages/checkout/checkout";
import Result from "./components/pages/result/result";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="result" element={<Result/>} />
					<Route path="catalog" element={<Category />} />
				</Route>
				
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
