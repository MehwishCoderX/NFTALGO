import { useState } from "react";
import { motion } from "framer-motion";

const nftData = [
  { id: 1, image: "/images/nft1.png", alt: "NFT 1" },
  { id: 2, image: "/images/nft2.png", alt: "NFT 2" },
  { id: 3, image: "/images/nft3.png", alt: "NFT 3" },
  { id: 4, image: "/images/nft4.png", alt: "NFT 4" },
  { id: 5, image: "/images/nft5.png", alt: "NFT 5" },
  { id: 6, image: "/images/nft6.png", alt: "NFT 6" },
  { id: 7, image: "/images/nft7.png", alt: "NFT 7" },
  { id: 8, image: "/images/nft8.png", alt: "NFT 8" },
];

export default function GenerateNFT() {
  const [prompt, setPrompt] = useState("");
  const [generatedNFTs, setGeneratedNFTs] = useState([]);

  const handleGenerate = () => {
    // Mock NFT generation (Select 3 random NFTs)
    const shuffledNFTs = [...nftData].sort(() => 0.5 - Math.random());
    setGeneratedNFTs(shuffledNFTs.slice(0, 3));
  };

  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* Input and Generate Button */}
      <div className="relative flex items-center w-full max-w-lg bg-white shadow-lg rounded-full overflow-hidden">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Fantasy Creature holding a sword..."
          className="w-full p-3 pl-5 text-gray-800 focus:outline-none"
          aria-label="NFT prompt input"
        />
        <button
          onClick={handleGenerate}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-r-full hover:bg-red-700 transition"
          aria-label="Generate NFT"
        >
          Generate 🚀
        </button>
      </div>

      {/* Animated NFT Grid */}
      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {generatedNFTs.length > 0
          ? generatedNFTs.map((nft) => (
              <motion.div
                key={nft.id}
                className="bg-white p-2 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={nft.image}
                  alt={nft.alt}
                  className="w-24 h-24 rounded-lg"
                />
              </motion.div>
            ))
          : nftData.map((nft) => (
              <motion.div
                key={nft.id}
                className="bg-white p-2 rounded-lg shadow-lg opacity-50"
              >
                <img
                  src={nft.image}
                  alt={nft.alt}
                  className="w-20 h-20 rounded-lg"
                />
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
}
