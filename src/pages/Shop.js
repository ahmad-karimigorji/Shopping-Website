import {
  useCart,
  useCartDispatcher,
} from "../context/CartProvider/CartProvider";
import { addToCart, removeFromCart } from "../context/CartProvider/cartActions";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { getProducts } from "../services/productsService";
import LoadingPage from "../component/loading/LoadingPage";

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useCartDispatcher();
  const { cart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await getProducts();
      setProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart !`);
  };
  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  if (loading) return <LoadingPage />;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,290px))] justify-center gap-y-10 gap-x-6">
      {products.length > 0 &&
        products.map((product) => (
          <div
            className="border border-gray-200 rounded overflow-hidden"
            key={product._id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[270px] object-cover"
            />
            <div className="flex justify-between items-center px-2 h-20">
              <div className="font-semibold	">
                <p>{product.name}</p>
                <p className="text-indigo-600">$ {product.price}</p>
              </div>
              {cart.some((item) => item._id === product._id) ? (
                <button
                  className="border border-indigo-600 rounded text-indigo-600 px-2 py-1"
                  onClick={() => removeFromCartHandler(product)}
                >
                  remove
                </button>
              ) : (
                <button
                  className="bg-indigo-600 rounded text-white px-2 py-1.5"
                  onClick={() => addToCartHandler(product)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shop;
