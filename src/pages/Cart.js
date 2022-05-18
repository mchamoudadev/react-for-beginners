import { useParams } from "react-router";
import Product from "../components/Product";
import NotFound from "./404";

const products = [
    {
        id: 1,
        name: "Mac M1",
        urlImage:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 2999,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium dolore dicta, excepturi ipsum possimus autem quis ipsa vitae sed saepe, est cum suscipit doloribus. Facere eum necessitatibus architecto ab."
    },
    {
        id: 2,
        name: "Iphone 13 Pro",
        urlImage:
            "https://images.pexels.com/photos/7616999/pexels-photo-7616999.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        price: 999,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium dolore dicta, excepturi ipsum possimus autem quis ipsa vitae sed saepe, est cum suscipit doloribus. Facere eum necessitatibus architecto ab."
    },
    {
        id: 3,
        name: "Logitech Keyboard",
        urlImage:
            "https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        price: 99,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium dolore dicta, excepturi ipsum possimus autem quis ipsa vitae sed saepe, est cum suscipit doloribus. Facere eum necessitatibus architecto ab."
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

const Cart = () => {

    const { productId } = useParams();
    const currentProduct = products.filter(pro => pro.id == productId);

    console.log(currentProduct);

    return (
        <>
            { currentProduct.length > 0 ? <Product product={currentProduct[0]} /> : <NotFound />

            }
        </>



    );

};

export default Cart;