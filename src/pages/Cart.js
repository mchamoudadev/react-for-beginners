import { useParams } from "react-router";
import Product from "../components/Product";
import useShop from "../ShopContext";
import NotFound from "./404";



const Cart = ({ cart }) => {


    const { addToCart, removeFromCart, products, total } = useShop();


    if (products.length == 0) return <h1>Cart Is Empty</h1>;

    return (
        <>


            <div className="flex">
                {products.map((product) => (
                    <Product product={product} cart={true} />
                ))}
            </div>

            <div className="cart-price">
                <h2>Total Price :  ${total}</h2>
            </div>

        </>



    );

};

export default Cart;