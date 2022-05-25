import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);


export const ShopProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (product) => {

        const updatedProduct = state.products.concat(product);
        calculateTotal(updatedProduct);
        dispatch(
            {
                type: "ADD_TO_CART",
                payload: {
                    products: updatedProduct
                }
            }
        );

    };
    const removeFromCart = (product) => {
        // console.log("sttae", state.products);
        const updatedProduct = state.products.filter(pro => pro.id != product.id);
        calculateTotal(updatedProduct);
        dispatch(
            {
                type: "REMOVE_FROM_CART",
                payload: {
                    products: updatedProduct
                }
            }
        );

    };

    const calculateTotal = (products) => {

        let total = 0;
        products.forEach(pro => {
            total += pro.price;
        });

        dispatch(
            {
                type: "CALCULATE_TOTAL_PRICE",
                payload: {
                    total
                }
            }
        );

    };

    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
    };

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>;

};

const useShop = () => {
    const context = useContext(ShopContext);

    if (context === undefined) {
        throw new Error("context must be used inside shopContex");
    }
    return context;
};

export default useShop;