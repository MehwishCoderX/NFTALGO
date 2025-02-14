import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import stellaImg from '/assets/images/stella.png';
import FeaturedImg1 from '/assets/images/featured1.png'
import FeaturedImg2 from '/assets/images/featured2.png'
import FeaturedImg3 from '/assets/images/featured3.png'
import FeaturedImg4 from '/assets/images/featured4.png'
const nftData = [
  {
    id: 1,
    image:  FeaturedImg1,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 2,
    image:  FeaturedImg2,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 3,
    image:  FeaturedImg3,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 4,
    image:  FeaturedImg4,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
];

export default function NFTCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-32">
      {/* Section Title */}
      <h1 className="text-4xl">Featured Collection</h1>
      <h2 className="text-gray-400 text-lg text-center mb-6 font-[Roboto]">
        Explore our exclusive featured collection, showcasing innovative campaigns and creative storytelling from top brands around the world.
      </h2>

      {/* NFT Card Carousel */}
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-red-500 p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-red-500 p-2 rounded-full shadow-md"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Scrollable NFT Cards */}
        <motion.div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-10"
        >
          {nftData.map((nft) => (
            <div
              key={nft.id}
              className="bg-white rounded-xl shadow-md p-4 w-64 flex-shrink-0 border border-gray-200"
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-2 mb-3">
                <img
                  src={stellaImg}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-bold">{nft.name}</p>
                  <p className="text-xs text-gray-500 font-[Roboto]">{nft.username}</p>
                </div>
              </div>

              {/* NFT Image */}
              <img
                src={nft.image}
                alt={nft.name}
                className="rounded-lg w-full h-44 object-cover"
              />

              {/* Buy Section */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">Buy</button>
                <div className="bg-white p-1 rounded-lg shadow-sm flex items-center">
                  <span className="text-gray-700 text-sm font-semibold">Price:</span>
                  <span className="ml-1 text-black font-bold">{nft.price}</span>
                  <img
                    src="/assets/crypto-icon.png"
                    alt="crypto"
                    className="w-4 h-4 ml-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Scroll Button */}
       
      </div>
    </div>
  );
}

