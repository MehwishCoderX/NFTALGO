
import { useRef } from "react";
import { motion } from "framer-motion";
import Button from "../shared/Button";

// Import images
import stellaImg from "/assets/images/stella.png";
import FeaturedImg1 from "/assets/images/featured1.png";
import FeaturedImg2 from "/assets/images/featured2.png";
import FeaturedImg3 from "/assets/images/featured3.png";
import FeaturedImg4 from "/assets/images/featured4.png";

const nftData = [
  { id: 1, image: FeaturedImg1, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 2, image: FeaturedImg2, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 3, image: FeaturedImg3, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 4, image: FeaturedImg4, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
];

export default function NFTCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      direction === "left" ? (scrollRef.current.scrollLeft -= scrollAmount) : (scrollRef.current.scrollLeft += scrollAmount);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-24">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left">Featured Collection</h1>
      <h2 className="text-gray-400 text-sm sm:text-base md:text-lg text-left mb-6 font-[Roboto]">
        Explore our exclusive featured collection, showcasing innovative campaigns and creative storytelling from top brands around the world.
      </h2>

      <div className="flex justify-center sm:justify-end space-x-2 mb-4 gap-4">
        <Button 
        onClick={() => scroll("left")}
        className={'bg-gradient rounded-md transform rotate-45 p-2 shadow-md w-12 h-12 flex items-center justify-center'}
         img={'/assets/icons/arrow-backward.png'}
         imgClass={'w-6 h-6 -rotate-45'}
        ></Button>
      
        <Button 
        onClick={() => scroll("right")}
        className={'bg-gradient rounded-md transform rotate-45 p-2 shadow-md w-12 h-12 flex items-center justify-center'}
         img={'/assets/icons/arrow-forward.png'}
         imgClass={'w-6 h-6 -rotate-45'}
        ></Button>
      </div>


      {/* NFT Card Carousel */}
      <motion.div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-2 sm:px-4 md:px-6 lg:px-10"
      >
        {nftData.map((nft) => (
          <div
            key={nft.id}
            className="card-container p-4 flex flex-col gap-2  rounded-lg shadow-md"
            style={{ width: "280px", minWidth: "280px" }}
          >
            {/* Profile Section */}
            <div className="flex items-center space-x-2">
              <img src={stellaImg} alt="profile" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-bold">{nft.name}</p>
                <p className="text-xs text-gray-500 font-[Roboto]">{nft.username}</p>
              </div>
            </div>

            {/* NFT Image */}
            <img src={nft.image} alt={nft.name} className="rounded-lg w-full object-cover h-48" />

            {/* Buy Section */}
            <div className="flex justify-between items-center font-[Roboto]">
              <button className="bg-gradient text-white px-4 py-1 rounded-md text-sm">Buy</button>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center">
                <span className="text-gray-700 text-sm font-semibold">Price:</span>
                <img src="/assets/images/price.png" alt="crypto" className="w-4 h-4 ml-1" />
                <span className="ml-1 text-black text-sm">{nft.price}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}