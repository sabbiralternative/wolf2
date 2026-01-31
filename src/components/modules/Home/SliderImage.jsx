import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SliderImage = ({ bannerImage }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImage?.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              {" "}
              <div>
                <img className="banner" alt="" src={image} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderImage;
