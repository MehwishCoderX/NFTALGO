import React from 'react';
import stellaImg from "/assets/images/stella.png";
import FeaturedImg1 from "/assets/images/featured1.png";
import FeaturedImg2 from "/assets/images/featured2.png";
import FeaturedImg3 from "/assets/images/featured3.png";
import FeaturedImg4 from "/assets/images/featured4.png";

const nftData = [
  { id: 1, image: FeaturedImg1, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02", sold: true },
  { id: 2, image: FeaturedImg2, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02", sold: false },
  { id: 3, image: FeaturedImg3, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02", sold: true },
  { id: 4, image: FeaturedImg4, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02", sold: false },
];

const Sold = () => {
  return (
    <section className=''>
        <div className=" relative top-0 bottom-16 left-[1000px] ">  
       <div className="absolute inset-0  circle  red blur z-0 "></div>
       </div>
    <div className="relative w-full max-w-6xl mx-auto p-10 py-24">
      <h1 className="text-4xl font-bold mb-8 text-left">Recently Sold</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {nftData.map((nft) => (
          <div key={nft.id} className="trend-card p-4 flex flex-col gap-2 shadow-lg rounded-lg overflow-hidden relative">
            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <img src={stellaImg} alt="profile" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-bold">{nft.name}</p>
                <p className="text-xs text-gray-500">{nft.username}</p>
              </div>
            </div>

            {/* NFT Image Section */}
            <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
              <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />

              {/* Sold Button */}
              {nft.sold && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-md font-bold">
                  Sold
                </div>
              )}

              {/* Buy Overlay Section */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between font-[Roboto] items-center gap-2   p-2 rounded-lg">
                <button className="bg-red-500 text-white px-4  text-sm py-1 rounded-md">Buy</button>
                <div className="flex items-center  bg-white shadow-2xl rounded-md px-2 py-1">
                  <span className="text-gray-700 text-sm font-semibold">Price:</span>
                  <img
                  src="/assets/images/price.png"
                  alt="crypto"
                  className="w-4 h-4 ml-1"
                />
                <span className="ml-1 text-black text-sm">{nft.price}</span>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Sold;
