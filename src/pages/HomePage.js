import { ImTruck } from "react-icons/im";
import { IoMdRefresh } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import FeaturedProductsSlideShow from "../component/slideShow/FeaturedProductsSlideShow";
import SlideShowComponent from "../component/slideShow/SlideShowComponent";

const collectionsItem = [
  {
    id: 201,
    cololectionName: "Women",
    imgUrl: "https://s2.uupload.ir/files/women_qo32.jpg",
    imgAlt: "women",
  },
  {
    id: 202,
    cololectionName: "Children",
    imgUrl: "https://s2.uupload.ir/files/children_07ru.jpg",
    imgAlt: "children",
  },
  {
    id: 203,
    cololectionName: "Men",
    imgUrl: "https://s2.uupload.ir/files/men_5vjk.jpg",
    imgAlt: "men",
  },
];
const HomePage = () => {
  return (
    <>
      <div className="min-h-[500px] -mt-20">
        <div className="w-full absolute left-1/2 -translate-x-1/2 bg-sky-100">
          <SlideShowComponent />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] justify-center gap-y-10 gap-x-2 py-16">
        <div className="sm:flex min-w-[250px] max-w-[350px]">
          <div className="text-indigo-600 mr-3 mb-2 text-3xl">
            <ImTruck />
          </div>
          <div>
            <h2 className="font-semibold">FREE SHIFFING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
        <div className="sm:flex min-w-[250px] max-w-[350px]">
          <div className="text-indigo-600 mr-3 mb-2 text-3xl">
            <IoMdRefresh />
          </div>
          <div>
            <h2 className="font-semibold">FREE RETURNS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
        <div className="sm:flex min-w-[250px] max-w-[350px]">
          <div className="text-indigo-600 mr-3 mb-2 text-3xl">
            <BsQuestionCircleFill />
          </div>
          <div>
            <h2 className="font-semibold">CUSTOMER SUPPORT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full absolute left-1/2 -translate-x-1/2" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] justify-center gap-y-10 gap-x-2 py-16">
        {collectionsItem.map((item) => (
          <Link
            key={item.id}
            to="/shop"
            className="group sm:flex min-w-[250px] max-w-[350px] h-[500px] relative after:absolute after:block after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50 overflow-hidden"
          >
            <img
              src={item.imgUrl}
              alt={item.imgAlt}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white z-10">
              <p className="text-xs">COLLECTIONS</p>
              <h2 className="font-semibold text-3xl">{item.cololectionName}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="min-h-[600px]">
        <div className="w-full absolute left-1/2 -translate-x-1/2 bg-gray-100">
          <div
            className="w-full max-w-[1124px] mx-auto my-10 px-4"
            id="featuredProducts"
          >
            <h2 className="relative text-center mb-10 text-2xl font-semibold pt-3 before:inline-block before:w-10 before:h-0.5 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-indigo-600">
              Featured Products
            </h2>
            <FeaturedProductsSlideShow />
          </div>
        </div>
      </div>
      <div className="my-20">
        <h2 className="relative text-center mb-10 text-2xl font-semibold pt-3 before:inline-block before:w-8 before:h-0.5 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-indigo-600">
          Big Sale!
        </h2>
        <div className="flex flex-col justify-center items-center gap-5 sm:flex-row">
          <img
            src="https://s2.uupload.ir/files/sale_gpfa.jpg"
            alt="big sale"
            className="sm:w-1/2 rounded"
          />
          <div className="max-w-[400px] flex flex-col justify-center items-center space-y-3">
            <h2 className="font-bold text-xl text-indigo-600">
              50% less in all items
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
            <Link className="bg-indigo-600 text-white p-2 rounded" to="/shop">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
