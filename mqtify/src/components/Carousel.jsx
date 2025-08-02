import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css"; // Create this for custom styling

const Carousel = ({ items, children }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            {children(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
