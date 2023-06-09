import { Link, NavLink } from "react-router-dom";
import MultiStepsComponent from "../component/multiStepsComponent/MultiStepsComponent";
import { addToCart, removeFromCart } from "../context/CartProvider/cartActions";
import {
  useCart,
  useCartDispatcher,
} from "../context/CartProvider/CartProvider";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartDispatcher();
  const incrementHandler = (product) => {
    dispatch(addToCart(product));
  };
  const decrementHandler = (product) => {
    dispatch(removeFromCart(product));
  };
  if (cart.length === 0) {
    return (
      <div>
        <h1 className="font-semibold text-center">Your Cart is Empty !</h1>
        <Link
          to="/shop"
          className="w-max flex justify-center items-center mx-auto text-indigo-600 hover:font-semibold mt-2"
        >
          <span className="mr-2">Go Shop</span> <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    );
  }
  return (
    <section>
      <MultiStepsComponent />
      <div className="space-y-3 md:flex md:space-x-10">
        <div className="space-y-1.5 w-full lg:w-2/3 divide-y pb-4">
          {cart.map((product) => (
            <div
              key={product._id}
              className="flex justify-between items-center pt-5 "
            >
              <img className="w-24" src={product.image} alt={product.name} />
              <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div className="font-semibold">
                  <p>{product.name}</p>
                  <p className="text-indigo-600">$ {product.offPrice}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="border border-gray-200 hover:border-indigo-600 rounded-l-lg hover:bg-indigo-600 hover:text-white px-3 py-1"
                    onClick={() => decrementHandler(product)}
                  >
                    -
                  </button>
                  <span className="border-t border-b border-gray-200 px-3 py-1 font-semibold">
                    {product.quantity}
                  </span>
                  <button
                    className="border border-gray-200 hover:border-indigo-600 rounded-r-lg hover:bg-indigo-600 hover:text-white px-3 py-1"
                    onClick={() => incrementHandler(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CartSummery cart={cart} total={total} />
      </div>
    </section>
  );
};

export default CartPage;

const CartSummery = ({ cart, total }) => {
  const origineTotal = cart.length
    ? cart.reduce((accu, curr) => accu + curr.price * curr.quantity, 0)
    : 0;
  return (
    <div className="md:min-w-[250px] lg:w-1/3">
      <div className=" border border-gray-200 p-3 rounded">
        <h2 className="font-bold mb-5">Cart Summery</h2>
        <div className="w-full flex justify-between mb-1.5 font-semibold">
          <span>cart total</span>
          <span className="text-indigo-600">$ {origineTotal}</span>
        </div>
        <div className="w-full flex justify-between font-semibold">
          <span>cart discount</span>
          <span className="text-indigo-600">$ {origineTotal - total}</span>
        </div>
        <div className="w-full flex justify-between border-t border-gray-200 mt-5 pt-1 font-semibold">
          <span>net price</span>
          <span className="text-indigo-600">$ {total}</span>
        </div>
        <NavLink to="/signup?redirect=/checkout">
          <button className="bg-indigo-600 text-white rounded py-1.5 mt-10 px-10 relative -translate-x-1/2 left-1/2 md:w-full">
            CheckOut
          </button>
        </NavLink>
      </div>
    </div>
  );
};
