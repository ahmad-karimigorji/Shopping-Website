import { BiCart, BiCheck, BiCreditCard } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const MultiStepsComponent = () => {
  const location = useLocation().pathname;
  return (
    <div className="w-full max-w-[600px] mx-auto pt-1 pb-16">
      <div className="relative flex justify-between items-center ">
        <div className="absolute w-11/12 border-b-2 border-b-indigo-600 border-dashed -z-10 top-7 left-1/2 -translate-x-1/2"></div>
        <div className="flex flex-col justify-center items-center space-y-1.5">
          <div className="w-14 h-14 rounded-full bg-sky-100 flex justify-center items-center overflow-hidden text-2xl text-indigo-600">
            <BiCheck />
          </div>
          <span className="text-xs text-indigo-600">step 1/3</span>
          <span>SHOP</span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1.5">
          <div
            className={`w-14 h-14 rounded-full flex justify-center items-center overflow-hidden text-2xl ${
              location === "/cart"
                ? "text-gray-100 bg-indigo-600"
                : "bg-sky-100 text-indigo-600"
            }`}
          >
            {location === "/cart" ? <BiCart /> : <BiCheck />}
          </div>
          <span className="text-xs text-indigo-600">step 2/3</span>
          <span>CART</span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1.5">
          <div
            className={`w-14 h-14 rounded-full flex justify-center items-center overflow-hidden text-2xl ${
              location === "/checkout"
                ? "text-gray-100 bg-indigo-600"
                : "bg-sky-100 text-indigo-600"
            }`}
          >
            <BiCreditCard />
          </div>
          <span className="text-xs text-indigo-600">step 3/3</span>
          <span>CHECKOUT</span>
        </div>
      </div>
    </div>
  );
};

export default MultiStepsComponent;
