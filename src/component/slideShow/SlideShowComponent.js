// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

const SlideShowComponent = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[500px] w-full max-w-[1124px] px-3 overflow-hidden"
      >
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center min-[480px]:flex-row min-[480px]:justify-evenly">
            <img
              className="w-[260px] sm:w-[320px] md:w-[370px]"
              src="https://s2.uupload.ir/files/woman-with-shopping-bags_7glh.png"
              alt="woman with shopping bags"
            />
            <div className="max-w-[300px] text-indigo-600 relative bottom-8 min-[480px]:bottom-0">
              <h2 className="font-bold">Finding Your Perfect Shoes</h2>
              <p className="pl-2 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "ml-2 bg-indigo-600 text-white p-2 rounded-md"
                }
                to="/shop"
              >
                Shop now
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center min-[480px]:flex-row min-[480px]:justify-evenly">
            <img
              className="w-[260px] sm:w-[320px] md:w-[370px]"
              src="https://s2.uupload.ir/files/woman-with-shopping-bags_7glh.png"
              alt="woman with shopping bags"
            />
            <div className="max-w-[300px] text-indigo-600 relative bottom-8 min-[480px]:bottom-0">
              <h2 className="font-bold">Finding Your Perfect Shoes</h2>
              <p className="pl-2 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "ml-2 bg-indigo-600 text-white p-2 rounded-md"
                }
                to="/shop"
              >
                Shop now
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center min-[480px]:flex-row min-[480px]:justify-evenly">
            <img
              className="w-[260px] sm:w-[320px] md:w-[370px]"
              src="https://s2.uupload.ir/files/woman-with-shopping-bags_7glh.png"
              alt="woman with shopping bags"
            />
            <div className="max-w-[300px] text-indigo-600 relative bottom-8 min-[480px]:bottom-0">
              <h2 className="font-bold">Finding Your Perfect Shoes</h2>
              <p className="pl-2 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "ml-2 bg-indigo-600 text-white p-2 rounded-md"
                }
                to="/shop"
              >
                Shop now
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideShowComponent;
