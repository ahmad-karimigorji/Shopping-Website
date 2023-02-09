import Navigation from "../component/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <div className="w-[300px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1140px] mx-auto">
          <Navigation />
        </div>
      </header>
      <section className="w-[300px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1140px] mx-auto">
        children
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
