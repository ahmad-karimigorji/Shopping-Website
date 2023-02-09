import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>NOT FOUND / 404</div>,
    children: [
      {
         errorElement: <div>NOT FOUND / 404</div> ,
      children: [
        { path: "shop", element: <Shop /> },
      ],
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
