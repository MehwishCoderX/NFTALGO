import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
const HeroSection = () => {

  return (
    <section className="text-center py-12 bg-[url(assets/images/hero-background.png) ] ">
      {/* Main Heading */}
      <h1 className="text-black text-[5rem] md:text-7xl font-bold uppercase tracking-wide">
        Discover, Create & <br /> Sell Artworks.
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto font-[Roboto]">
        Discover and trade unique digital art pieces on our NFT website, <br />
        where creativity meets blockchain technology.
      </p>


    
      
    </section>
  );
};

export default HeroSection;
