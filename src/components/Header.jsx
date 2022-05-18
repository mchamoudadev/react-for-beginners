import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="menu">
			<h1>Reactify</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/cart">Cart</Link>
			</div>
		</div>
	);
};

export default Header;
