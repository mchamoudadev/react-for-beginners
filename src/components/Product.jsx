import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useShop from "../ShopContext";

const Product = ({ product, cart }) => {
	const { addToCart, removeFromCart, products } = useShop();
	const [isInCart, setIsInCart] = useState(true);
	// console.log(products);

	useEffect(() => {
		const isCart = products.filter((pro) => pro.id == product.id);
		console.log("isCart", isCart.length);
		if (isCart.length > 0) {
			setIsInCart(true);
		} else {
			setIsInCart(false);
		}
	}, [products]);

	const handleClick = () => {
		if (isInCart) {
			removeFromCart(product);
		} else {
			addToCart(product);
		}
	};
	return (
		<div className={`${cart ? "cart-card" : "card"}`}>
			<img src={product.urlImage} alt="" />
			<div className="info">
				<span>{product.name}</span>
				<span className="price">${product.price}</span>
			</div>
			{product.desc && (
				<div className="info">
					<p>{product.desc}</p>
				</div>
			)}

			{/* <Link to={`/${product.id}`}> */}
			<button
				className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}
				onClick={handleClick}>
				{isInCart ? "Remove From Cart" : "Add To Cart"}
			</button>
			{/* </Link> */}
		</div>
	);
};

export default Product;
