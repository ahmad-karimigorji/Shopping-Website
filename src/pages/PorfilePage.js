import { BsPersonCircle } from "react-icons/bs";
import { HiMail, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { useAuth } from "../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const PorfilePage = () => {
  const auth = useAuth();

  if (!auth)
    return (
      <Link
        to="/login"
        className="w-max flex justify-center items-center mx-auto text-indigo-600 hover:font-semibold"
      >
        <span className="mr-2">Login</span> <HiOutlineArrowNarrowRight />
      </Link>
    );
  return (
    <div className="sm:flex sm:items-start sm:justify-between">
      <div className="min-w-[200px] space-y-3 mb-5">
        <div>
          <BsPersonCircle className="text-gray-200 text-8xl mb-2" />
          <p>{auth.name}</p>
          <p className="text-gray-400">{auth.email}</p>
        </div>
        <ul>
          <li className="w-max text-gray-400 transtion duration-500 hover:text-indigo-600 hover:cursor-pointer py-1">
            Personal information
          </li>
          <li className="w-max text-gray-400 transtion duration-500 hover:text-indigo-600 hover:cursor-pointer py-1">
            Billing & Payments
          </li>
          <li className="w-max text-gray-400 transtion duration-500 hover:text-indigo-600 hover:cursor-pointer py-1">
            Order History
          </li>
          <li className="w-max text-gray-400 transtion duration-500 hover:text-indigo-600 hover:cursor-pointer py-1">
            Gift Cards
          </li>
        </ul>
      </div>

      <div>
        <div className="pb-4">
          <h2 className="font-semibold">Personal information</h2>
          <p className="text-gray-400">
            Manage yout personal information, including phone numbers and email
            address where you can be contacted.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-x-2 gap-y-3">
          <div className="w-full px-3 py-4 rounded bg-white">
            <div className="flex justify-between">
              <h3 className="font-semibold">Name</h3>
              <BsPersonCircle className="text-indigo-600 text-lg" />
            </div>
            <p className="text-gray-400">{auth.name}</p>
          </div>
          <div className="w-full px-3 py-4 rounded bg-white">
            <div className="flex justify-between">
              <h3 className="font-semibold">Email</h3>
              <HiMail className="text-indigo-600 text-lg" />
            </div>
            <p className="text-gray-400">{auth.email}</p>
          </div>
          <div className="w-full px-3 py-4 rounded bg-white">
            <div className="flex justify-between">
              <h3 className="font-semibold">Phone number</h3>
              <BsTelephoneFill className="text-indigo-600 text-lg" />
            </div>
            <p className="text-gray-400">{auth.phoneNumber}</p>
          </div>
          <div className="w-full px-3 py-4 rounded bg-white">
            <div className="flex justify-between">
              <h3 className="font-semibold">Language</h3>
              <MdLanguage className="text-indigo-600 text-lg" />
            </div>
            <p className="text-gray-400">English( UK ) - English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfilePage;
