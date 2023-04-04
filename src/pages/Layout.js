import { Outlet } from "react-router-dom";
import Navigation from "../component/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterComponent from "../component/footer/FooterComponent";

const Layout = ({ outlet }) => {
  return (
    <>
      <header className="border-b border-b-gray-200">
        <Navigation />
      </header>
      <section className="w-full max-w-[1124px] mx-auto my-20 px-4">
        {outlet ? outlet : <Outlet />}
      </section>
      <footer className="border-t border-t-gray-200">
        <FooterComponent />
      </footer>
      <ToastContainer />
    </>
  );
};

export default Layout;
