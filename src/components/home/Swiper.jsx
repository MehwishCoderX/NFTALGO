import React from "react";
import avatarIImg from "/assets/images/img1.png";
import avatarIIImg from "/assets/images/img2.png";
import avatarIIIImg from "/assets/images/img3.png";
import avatarIVImg from "/assets/images/img4.png";
import avatarVImg from "/assets/images/img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";

export default function CoverflowEffect() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-8">
      <div className="max-w-7xl mx-auto">
        <Swiper
          loop={true}
          modules={[EffectCoverflow]}
          className="mySwiper shadow-[none]"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 60,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
            1280: { slidesPerView: 4, spaceBetween: 70 },
          }}
        >
          {[avatarIImg, avatarIIImg, avatarIIIImg, avatarIVImg, avatarVImg].map(
            (img, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={img}
                  alt="testimonial-avatar"
                  loading="lazy"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg  duration-300 ease-in-out transform hover:scale-105"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}

