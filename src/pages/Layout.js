import { Outlet } from "react-router-dom";
import Navigation from "../component/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <header className="border-b border-b-gray-200">
        <div className="w-[300px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1140px] mx-auto">
          <Navigation />
        </div>
      </header>
      <section className="w-[300px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1140px] mx-auto my-10 px-2">
        <Outlet/>
      </section>
      <footer>
        <div className="w-[300px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1140px] mx-auto">
          footer
        </div>
      </footer>
    </>
  );
};

export default Layout;
