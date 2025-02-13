import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
  { src: '/image1.jpg', price: '142.02' },
  { src: '/image2.jpg', price: '142.02' },
  { src: '/image3.jpg', price: '142.02' },
  { src: '/image4.jpg', price: '142.02' },
  { src: '/image5.jpg', price: '142.02' }
];

export default function ImageSwiper() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="bg-white rounded-xl shadow-lg p-4">
            <div className="relative w-30 h-96 rounded-xl overflow-hidden">
              <img
                src={img.src}
                alt="Swiper Slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-white rounded-lg px-3 py-1 shadow-md">
                <span className="text-black font-semibold">Price: {img.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
