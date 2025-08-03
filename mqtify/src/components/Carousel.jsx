import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

const Carousel = ({ items, children }) => {
  console.log("Carousel items", items);

  if (!items || items.length === 0) {
    return <p style={{ color: "white" }}>No items to show</p>;
  }

  return (
    <div className="carousel-container">
      {/* Custom navigation buttons */}
      <div className="swiper-button-prev custom-nav"></div>
      <div className="swiper-button-next custom-nav"></div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
