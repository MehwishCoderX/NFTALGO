import { motion } from "framer-motion";

const nftData = {
  title: "Boost Your NFTs: Enhance Visibility and Value",
  description:
    "The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.",
  buttonText: "Boost 🚀",
  image: "/images/visibility.png", // Replace with actual image path
 
};

export default function Visibility() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto p-6">
      {/* Left Content */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-bold  leading-tight">
          {nftData.title}
        </h2>
        <p className="text-gray-400 mt-4 font-[Roboto]">{nftData.description}</p>
        <button
          className="mt-6 px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition focus:ring-4 focus:ring-red-500"
          aria-label="Boost your NFT"
        >
          {nftData.buttonText}
        </button>
      </div>

      {/* Right NFT Card Preview */}
     <div>
      <img src="/assets/images/visibility.png" alt="" />
     </div>
     </div>

  );
}
