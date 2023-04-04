import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { useCart } from "../../context/CartProvider/CartProvider";

const Navigation = () => {
  const userData = useAuth();
  const { cart } = useCart();

  return (
    <div className="w-full max-w-[1124px] mx-auto px-3">
      <nav className=" flex justify-between items-center font-semibold">
        <ul className="flex py-3">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-indigo-600 inline-block py-2 px-3"
                  : "inline-block py-2 px-3 hover:text-indigo-600"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-indigo-600 inline-block py-2 px-3"
                  : "inline-block py-2 px-3 hover:text-indigo-600"
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-indigo-600 inline-block py-2 px-3"
                  : "inline-block py-2 px-3 hover:text-indigo-600"
              }
              to="/cart"
            >
              Cart
            </NavLink>
            {cart.length > 0 && (
              <span className="w-5 h-5 flex justify-center items-center bg-indigo-600 text-white rounded-full absolute -right-2 -top-1 text-sm">
                {cart.length}
              </span>
            )}
          </li>
        </ul>

        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-indigo-600 inline-block py-2 px-3"
              : "inline-block py-2 px-3 hover:text-indigo-600"
          }
          to={userData ? "/profile" : "/login"}
        >
          {userData ? "Profile" : "Login/Signup"}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
