import React from "react";

const nftData = {
  title: "Boost Your NFTs: Enhance Visibility and Value",
  description:
    "The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.",
  
  image: "/assets/images/visibility.png", // Replace with actual image path
};

export default function Visibility() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-5xl mx-auto p-6 md:p-10">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {nftData.title}
        </h2>
        <p className="text-gray-400 mt-4 font-[Roboto] text-sm md:text-base">
          {nftData.description}
        </p>
        <button
          className="mt-6 px-6 py-3 flex gap-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition focus:ring-4 focus:ring-red-500"
          aria-label="Boost your NFT"
        >
          Booster <span><img src="/assets/icons/Booster.png"/></span> 
        </button>
      </div>

      {/* Right NFT Card Preview */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={nftData.image}
          alt="NFT Visibility Preview"
          className="w-4/5 md:w-3/5 lg:w-full max-w-sm"
        />
      </div>
    </div>
  );
}
