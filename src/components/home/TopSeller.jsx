import React from "react";
import  SellerImg1 from '/assets/images/seller1.png'
import  SellerImg2 from '/assets/images/seller2.png'
import  SellerImg3 from '/assets/images/seller3.png'
import  SellerImg6 from '/assets/images/seller6.png'
import  SellerImg7 from '/assets/images/seller7.png'
import  SellerImg8 from '/assets/images/seller8.png'
import  SellerImg4 from '/assets/images/sell.png'
// import  SellerImg4 from 'assets/images/seller4.png'
import  SellerImg5 from '/assets/images/seller5.png'
const nfts = [
  {
    id: 1,
    image: SellerImg1,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 2,
    image: SellerImg2,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 3,
    image: SellerImg3,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 4,
    image: SellerImg4,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 5,
    image: SellerImg5,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 6,
    image: SellerImg6,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 7,
    image: SellerImg7,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
  {
    id: 8,
    image: SellerImg8,
    name: "Jacob Jones",
    price: "245.5 FRY",
  },
];

const TopSeller = () => {
  return (
    <div className="p-32">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Top Seller</h2>
        <a href="#" className="text-red-500 font-semibold font-[Roboto]">View All</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-gray-100 p-4 rounded-lg flex flex-col items-center"
          >
            <div className="relative">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
             
            </div>
            <p className="text-lg font-semibold mt-2">{nft.name}</p>
            <p className="text-gray-500 text-sm">{nft.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
