import Product from "./Product";

const products = [
	{
		id: 1,
		name: "Mac M1",
		urlImage:
			"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: 2999,
	},
	{
		id: 2,
		name: "Iphone 13 Pro",
		urlImage:
			"https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
		price: 999,
	},
	{
		id: 3,
		name: "Logitech Keyboard",
		urlImage:
			"https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
		price: 99,
	},
	{
		id: 4,
		name: "Logitech Keyboard",
		urlImage:
			"https://images.pexels.com/photos/5738087/pexels-photo-5738087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		price: 99,
	},
	{
		id: 5,
		name: "Logitech Keyboard",
		urlImage:
			"https://images.pexels.com/photos/11290876/pexels-photo-11290876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		price: 99,
	},
];

export const Products = () => {
	return (
		<div className="grid">
			{products.map((product) => (
				<Product product={product} />
			))}
		</div>
	);
};
