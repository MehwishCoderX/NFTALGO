// import React from "react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import CoverflowEffect from "./Swiper";
// const HeroSection = () => {

//   return (
    
//     <section className=" hero-section   text-center py-20 ">
//       {/* Main Heading */}
//       <h1 className="text-black  md:text-6xl pt-12 font-bold uppercase tracking-wide font-[APX K2] sm:text-2xl">
//         Discover, Create & <br /> Sell Artworks.
//       </h1>

//       {/* Subtext */}
//       <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto font-[Roboto]">
//         Discover and trade unique digital art pieces on our NFT website, <br />
//         where creativity meets blockchain technology.
//       </p>
      
//       {/* swiper */}
    
//       <div className=" py-16  ">  
//   <CoverflowEffect/>
//   </div>

    
 
      
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import CoverflowEffect from "./Swiper";

const HeroSection = () => {
  return (
    <section className="hero-section text-center py-20">
      {/* Main Heading */}
      <h1 className="text-black md:text-6xl pt-12 font-bold uppercase tracking-wide font-[APX K2] sm:text-2xl">
        Discover, Create & <br /> Sell Artworks.
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto font-[Roboto]">
        Discover and trade unique digital art pieces on our NFT website, <br />
        where creativity meets blockchain technology.
      </p>
      
      {/* Swiper with circle background */}
      <div className="py-16 relative ">  
        <div className="absolute inset-0  circle  ml-96  mt-24 red blur z-0 "></div> {/* Circle background */}
        <div className="relative z-10">
          <CoverflowEffect />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
