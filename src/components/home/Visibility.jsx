import React from "react";
import Button from '../shared/Button'

const nftData = {
  title: "Boost Your NFTs: Enhance Visibility and Value",
  description:
    "The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.",
  
  image: "/assets/images/visibility.png", // Replace with actual image path
};

export default function Visibility() {
  return (
    <section className="">
      <div className=" relative ">  
       <div className="absolute top-70 bottom-80 -left-24 inset-0  circle z-0 "></div>
       </div>
    
    <div className="flex flex-col-reverse  py-20 lg:flex-row items-center gap-10 max-w-5xl mx-auto p-6 md:p-10">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {nftData.title}
        </h2>
        <p className="text-gray-400 mt-4 font-[Roboto] text-sm md:text-base">
          {nftData.description}
        </p>
      
        <Button
          className="bg-gradient font-[Roboto] hover:from-red-600 hover:to-red-700 text-white mt-6 rounded-md shadow-md px-6 py-3 flex items-center flex-row-reverse justify-center gap-2"
          height={55}
          width={200}
          text={"Boost"}
          img={"./assets/icons/Booster.png"}
          imgClass={"w-5 h-5 "}
        ></Button>
      
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
    </section>
  );
}
