import {
  useCart,
  useCartDispatcher,
} from "../context/CartProvider/CartProvider";
import { productsData } from "../data";
import { addToCart, removeFromCart } from "../context/CartProvider/cartActions";
import { toast } from "react-toastify";

const Shop = () => {
  const dispatch = useCartDispatcher();
  const { cart } = useCart();
  console.log(cart);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart !`);
  };
  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  const products = productsData;
  return (
    <section className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,290px))] justify-center gap-y-10 gap-x-6">
        {products.map((product) => (
          <div className="border border-gray-200" key={product.id}>
            <img src={product.imageURL} alt={product.name} />
            <div className="flex justify-between items-center px-2 h-20">
              <div className="font-semibold	">
                <p>{product.name}</p>
                <p className="text-indigo-600">$ {product.price}</p>
              </div>
              {cart.some((item) => item.id === product.id) ? (
                <button
                  className="border border-indigo-600 rounded-md text-indigo-600 px-2 py-1"
                  onClick={() => removeFromCartHandler(product)}
                >
                  remove
                </button>
              ) : (
                <button
                  className="bg-indigo-600 rounded-md text-white px-2 py-1.5"
                  onClick={() => addToCartHandler(product)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
