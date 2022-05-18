const Product = ({ product }) => {
	return (
		<div className="card">
			<img src={product.urlImage} alt="" />
			<div className="info">
				<span>{product.name}</span>
				<span className="price">${product.price}</span>
			</div>
			<button className="btn btn-">Add To Cart</button>
		</div>
	);
};

export default Product;
