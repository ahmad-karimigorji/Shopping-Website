export const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "ADD_TO_CART":
      payLoad.quantity = 1
      return {...state, cart: [...state.cart, payLoad]}
    default:
      break;
  }
};

export default reducer;
