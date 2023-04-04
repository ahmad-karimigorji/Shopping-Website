import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const FooterComponent = () => {
  return (
    <div className="w-full max-w-[1124px] mx-auto px-3 py-16 flex flex-col sm:flex-row sm:justify-between gap-6">
      <div className="grow">
        <h2 className="font-semibold text-xl pb-4">Navigations</h2>
        <div className="flex justify-start flex-wrap gap-x-1 gap-y-5">
          <ul className="min-w-[200px] space-y-2">
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Sell online
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Features
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Shopping cart
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Store builder
              </Link>
            </li>
          </ul>

          <ul className="min-w-[200px] space-y-2">
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Mobile commerce
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Dropshipping
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Website development
              </Link>
            </li>
          </ul>

          <ul className="min-w-[200px] space-y-2">
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Point of sale
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Hardware
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/shop"
                className="text-gray-400 p-1.5 transition duration-500 hover:text-indigo-600 inline"
              >
                Software
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="min-w-[300px]">
        <h2 className="font-semibold text-xl pb-4">Contact Info</h2>
        <div className="flex items-center gap-3 pb-2">
          <MdLocationOn className="min-w-[20px] text-indigo-600 text-xl" />
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className="flex items-center gap-3 pb-2">
          <BsTelephoneFill className="min-w-[20px] text-indigo-600 text-sm" />
          <p>+2 392 3929 210</p>
        </div>
        <div className="flex items-center gap-3">
          <HiMail className="min-w-[20px] text-indigo-600 text-xl" />
          <p>emailaddress@domain.com</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl">Subscribe</h2>
          <div className="w-full max-w-[500px] flex p-0.5 border border-gray-300 rounded my-2">
            <input
              type="email"
              placeholder="Email"
              className="grow outline-none p-2 bg-transparent"
            />
            <button className="bg-indigo-600 text-white px-3 py-2 rounded cursor-pointer">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
