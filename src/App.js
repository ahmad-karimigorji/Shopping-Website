import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CartProvider from "./context/CartProvider/CartProvider";
import CartPage from "./pages/CartPage";
import Layout from "./pages/Layout";
import Shop from "./pages/Shop";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>NOT FOUND / 404</div>,
    children: [
      {
        errorElement: <div>NOT FOUND / 404</div>,
        children: [
          { path: "shop", element: <Shop /> },
          { path: "cart", element: <CartPage /> },
          { path: "signup", element: <SignupPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
