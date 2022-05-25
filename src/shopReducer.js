export const initialState = {
    total: 0,
    products: [],
};

const shopReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log("Add to cart", payload.products);
            return {
                ...state,
                products: payload.products
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: payload.products
            };
        case "CALCULATE_TOTAL_PRICE":
            return {
                ...state,
                total: payload.total
            };
        default:
            throw new Error("unkown reducer");
    }
};


export default shopReducer;