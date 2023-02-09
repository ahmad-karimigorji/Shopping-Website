import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payLoad: product
    }
}
export function removeFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payLoad: product
    }
}