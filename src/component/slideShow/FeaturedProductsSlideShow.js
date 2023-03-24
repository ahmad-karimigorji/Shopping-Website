// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const slideItem = [
  {
    id: 101,
    name: "Megan Rapinoe",
    price: 123,
    imgUrl: "https://s2.uupload.ir/files/shop_01_l4md.jpg",
  },
  {
    id: 102,
    name: "KNIT VEST",
    price: 59,
    imgUrl: "https://s2.uupload.ir/files/shop_02_m1h5.jpg",
  },
  {
    id: 103,
    name: "RIB TANK TOP",
    price: 77,
    imgUrl: "https://s2.uupload.ir/files/shop_03_a1nk.jpg",
  },
  {
    id: 104,
    name: "Pants Men",
    price: 130,
    imgUrl: "https://s2.uupload.ir/files/shop_04_pym1.jpg",
  },
  {
    id: 105,
    name: "Coats Men",
    price: 250,
    imgUrl: "https://s2.uupload.ir/files/shop_05_ws70.jpg",
  },
  {
    id: 106,
    name: "Black Scarf",
    price: 287,
    imgUrl: "https://s2.uupload.ir/files/shop_06_qe.jpg",
  },
  {
    id: 107,
    name: "Blue Coats Men",
    price: 66,
    imgUrl: "https://s2.uupload.ir/files/shop_07_m7gy.jpg",
  },
];
const FeaturedProductsSlideShow = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        // spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        
        navigation={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[ Navigation]}
        className="min-h-[440px] max-w-[800px]"
      >
        {slideItem.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <Link to="/shop" className="group max-w-[250px] inline-block bg-white">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="flex flex-col items-center space-y-1.5 pt-3">
                <p className="text-indigo-500 group-hover:text-indigo-600 group-haver:font-bold">
                  {item.name}
                </p>
                <p className="text-gray-400">Finding perfect products</p>
                <p className="text-indigo-600">$ {item.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedProductsSlideShow;
