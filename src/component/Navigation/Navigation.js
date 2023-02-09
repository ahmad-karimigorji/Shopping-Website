import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex bg-slate-100 py-3">
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
    </nav>
  );
};

export default Navigation;
