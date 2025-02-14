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
// import "swiper/css/navigation";

// Import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

export default function CoverflowEffect() {
  return (
    <section>
      <div className="main">
        <Swiper
          loop={true}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          // navigation={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 60,
            depth: 500,
            modifier: 1,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
          }}
        >
          {[avatarIImg, avatarIIImg, avatarIIIImg, avatarIVImg, avatarVImg].map(
            (img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="testimonial-avatar" loading="lazy" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}
