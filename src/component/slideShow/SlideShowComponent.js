// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const slideShowItem = [
  {
    id: 1001,
    imgUrl: "https://s2.uupload.ir/files/woman-with-shopping-bags1_7hzu.png",
    imgAlt: "woman with shopping bags",
  },
  {
    id: 1002,
    imgUrl: "https://s2.uupload.ir/files/woman-with-shopping-bags1_7hzu.png",
    imgAlt: "woman with shopping bags",
  },
  {
    id: 1003,
    imgUrl: "https://s2.uupload.ir/files/woman-with-shopping-bags1_7hzu.png",
    imgAlt: "woman with shopping bags",
  },
];

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
        className="h-[500px] w-full max-w-[1124px] overflow-hidden"
      >
        {slideShowItem.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full flex flex-col justify-center items-center min-[480px]:flex-row min-[480px]:justify-evenly px-4">
              <img
                className="w-[260px] sm:w-[320px] md:w-[370px]"
                src={item.imgUrl}
                alt={item.imgAlt}
              />
              <div className="max-w-[300px] text-indigo-600 relative bottom-8 min-[480px]:bottom-0">
                <h2 className="font-bold">Finding Your Perfect Shoes</h2>
                <p className="pl-2 pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
                <Link
                  className="ml-2 bg-indigo-600 text-white p-2 rounded"
                  to="/shop"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideShowComponent;
