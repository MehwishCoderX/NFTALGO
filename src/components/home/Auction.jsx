import { useState } from "react";
import AuctionImg1 from "/assets/images/Auction1.png";
import AuctionImg2 from "/assets/images/Auction2.png";
import AuctionImg3 from "/assets/images/Auction3.png";
import AuctionImg4 from "/assets/images/Auction4.png";
import AuctionImg5 from "/assets/images/Auction5.png";
import AuctionImg6 from "/assets/images/Auction6.png";
import AuctionImg7 from "/assets/images/Auction7.png";
import AuctionImg8 from "/assets/images/Auction8.png";
import Button from "../shared/Button";
import Card from "../shared/Card";
import { motion } from "framer-motion";

const nftData = [
  { id: 1, image: AuctionImg1, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 2, image: AuctionImg2, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 3, image: AuctionImg3, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 4, image: AuctionImg4, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 5, image: AuctionImg5, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 6, image: AuctionImg6, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 7, image: AuctionImg7, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 8, image: AuctionImg8, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
];

export default function Auction() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full max-w-6xl mx-auto p-10 py-24">
      {/* Section Title */}
      <div className="flex justify-between flex flex-col md:flex-row justify-around items-center mb-6">
        <h1 className="text-4xl font-bold mb-8 text-left ">Auction</h1>
        <Button
          text={"Last 30 Minutes"}
          className="h-[50px] w-[200px] font-[Roboto] flex items-center gap-x-2 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
          img={"/assets/icons/trending-btn-icon.png"}
        />
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {nftData.map((nft) => (
          <div
            key={nft.id}
            className="relative"
            onMouseEnter={() => setHoveredId(nft.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card image={nft.image} name={nft.name} username={nft.username} />

            <div className="absolute bottom-[35%] left-[30%] flex items-center justify-center">
              {/* Countdown Button (Lowers on hover) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: hoveredId === nft.id ? 60 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Button
                  text={"3:06:59:18"}
                  className="bg-white bg-opacity-80 text-black px-4 py-2 rounded-md font-bold"
                />
              </motion.div>

              {/* Bid Button (Slides in from bottom) */}
              {hoveredId === nft.id && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 10, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute"
                >
                      <Button className=" font-[Roboto] bg-gradient text-xs text-white rounded-md shadow-md px-6 py-3 flex items-center gap-2" text={"place  bid"}  />
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
            <div className="flex justify-center items-center mt-8 font-[Roboto]">
       <Button className="bg-gradient flex-row-reverse text-white rounded-md shadow-md px-6 py-3 flex items-center gap-2" text={"Explore More"} img={"/assets/icons/explore.png"} imgClass="w-4 h-4" />
       </div>
    </section>
  );
}