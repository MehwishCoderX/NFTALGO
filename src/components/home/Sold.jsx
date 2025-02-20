
import React from "react";
import SoldImg1 from "/assets/images/Sold1.png";
import SoldImg2 from "/assets/images/Sold2.png";
import SoldImg3 from "/assets/images/Sold3.png";
import SoldImg4 from "/assets/images/Sold4.png";
import SoldImg5 from "/assets/images/Sold5.png";
import SoldImg6 from "/assets/images/Sold6.png";
import SoldImg7 from "/assets/images/Sold7.png";
import SoldImg8 from "/assets/images/Sold8.png";

import Button from "../shared/Button";
import Card from "../shared/Card";
const nftData = [
  {
    id: 1,
    image: SoldImg1,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 2,
    image: SoldImg2,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 3,
    image: SoldImg3,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 4,
    image: SoldImg4,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 5,
    image: SoldImg5,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 6,
    image: SoldImg6,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 7,
    image: SoldImg7,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
  {
    id: 8,
    image: SoldImg8,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
    sold: true,
  },
];

const Sold = () => {
  return (
    <section className="">
      <div className=" relative top-0 bottom-16 left-[1000px] ">
        <div className="absolute inset-0  circle  red blur z-0 "></div>
      </div>
      <div className="relative w-full max-w-6xl mx-auto p-10 py-24">
        <h1 className="text-4xl font-bold mb-8 text-left">Recently Sold</h1>
        <div className="relative">
          <div className=" relative grid grid-cols-1 mx-4 md:grid-cols-4 gap-2   gap-3 ">
            {nftData.map((nft) => (
              <div className="relative">
                <Card
                  image={nft.image}
                  name={nft.name}
                  username={nft.username}
                  price={nft.price}
                  showButton={true}
                />
                {nft.sold && (
                  <Button
                    text={"Sold"}
                    className={
                      "absolute top-auto bottom-[35%] left-[35%] right-auto   bg-gradient text-white px-4 py-2 rounded-md font-bold"
                    }
                  ></Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sold;
