import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import CoverflowEffect from "./Swiper";
const HeroSection = () => {

  return (
    <section className=" hero-section text-center py-20 ">
      {/* Main Heading */}
      <h1 className="text-black text-[5rem] md:text-6xl pt-12 font-bold uppercase tracking-wide font-[APX K2]">
        Discover, Create & <br /> Sell Artworks.
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto font-[Roboto]">
        Discover and trade unique digital art pieces on our NFT website, <br />
        where creativity meets blockchain technology.
      </p>
      
      {/* swiper */}
    
   <div className=" py-24">
    
    
   <CoverflowEffect/>
   </div>
      
    </section>
  );
};

export default HeroSection;
