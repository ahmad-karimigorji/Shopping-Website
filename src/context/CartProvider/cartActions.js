import { ADD_TO_CART } from "./cartTypes";

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payLoad: product
    }
}