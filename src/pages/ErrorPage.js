import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ErrorPge = () => {
  return (
    <div className="space-y-2.5 py-5">
      <h1 className="font-semibold text-center text-2xl pb-2">Ooops !</h1>
      <h2 className="font-semibold text-center">NOT FOUND PAGE / 404</h2>
      <Link
        to="/"
        className="w-max flex justify-center items-center mx-auto text-indigo-600 hover:font-semibold"
      >
        <span className="mr-2">Go Home</span> <HiOutlineArrowNarrowRight />
      </Link>
    </div>
  );
};

export default ErrorPge;
