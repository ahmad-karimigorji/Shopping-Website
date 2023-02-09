const reducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const products = [...state.cart];
      const index = products.findIndex((prodcut) => prodcut.id === payLoad.id);
      //update quantity
      if (index > -1) {
        const product = { ...products[index] };
        product.quantity++;
        products[index] = product;
        return { ...state, cart: products, total: state.tatal + payLoad.price };
      }
      //add product
      payLoad.quantity = 1;
      products.unshift(payLoad);
      return { ...state, cart: products, total: state.tatal + payLoad.price };
    }
    case "REMOVE_FROM_CART": {
      const products = [...state.cart];
      const index = products.findIndex((prodcut) => prodcut.id === payLoad.id);
      const product = { ...products[index] };

      //remove product
      if (product.quantity === 1) {
        const filteredroducts = products.filter(
          (product) => product.id !== payLoad.id
        );
        return {
          ...state,
          cart: filteredroducts,
          total: state.tatal - payLoad.price,
        };
      }
      //updata quantity
      product.quantity--;
      products[index] = product;

      return { ...state, cart: products, total: state.tatal + payLoad.price };
    }
    default:
      break;
  }
};

export default reducer;
