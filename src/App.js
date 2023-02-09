import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>NOT FOUND / 404</div>,
    children: [{ errorElement: <div>NOT FOUND / 404</div> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
