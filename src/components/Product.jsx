import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<div className="card">
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

			<Link to={`/${product.id}`}>
				<button className="btn btn-primary">Add To Cart</button>
			</Link>
		</div>
	);
};

export default Product;
