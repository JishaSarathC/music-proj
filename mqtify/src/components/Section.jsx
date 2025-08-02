import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Section.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Section = ({ title, fetchUrl }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [fetchUrl]);

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>{title}</h2>
        {/* Remove Show All button since carousel will handle scrolling */}
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <Card
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section;

