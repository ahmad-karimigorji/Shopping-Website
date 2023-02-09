import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./cartReducer";


const CartContext = createContext();
const CartContextDispatcher = createContext();



const CartProvider = ({ children }) => {
  const [cart, dispatcher] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatcher}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartDispatcher = () => useContext(CartContextDispatcher);
