import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import CartProvider from "./context/CartProvider/CartProvider";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import Shop from "./pages/Shop";
import SignupPage from "./pages/SignupPage";
import PorfilePage from "./pages/PorfilePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout outlet={<ErrorPage />} />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <CartPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "profile", element: <PorfilePage /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
