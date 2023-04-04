import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingPage = () => {
  return (
    <div className="h-[150px] flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin text-indigo-600 text-2xl" />
    </div>
  );
};

export default LoadingPage;
