import { NavLink } from "react-router-dom";
import {TbLogin} from "react-icons/tb"

const Navigation = () => {
  return (
    <nav className=" flex justify-between">
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
        <li>
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
        </li>
      </ul>
      <ul className="flex py-3">
        <li className="flex justify-center itams-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "text-indigo-600 inline-block py-2 px-3"
                : "inline-block py-2 px-3 hover:text-indigo-600"
            }
            to="/login"
          >
            <span className="sm:hidden"><TbLogin/></span>
            <span className="hidden sm:block">Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "text-indigo-600 inline-block py-2 px-3"
                : "inline-block py-2 px-3 hover:text-indigo-600"
            }
            to="/signup"
          >
            <span>Sign up</span>
            {/* <span>Sign up</span> */}
          </NavLink>
        </li>
        </ul>
    </nav>
  );
};

export default Navigation;
