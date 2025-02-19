
import { useState } from "react";

const faqs = [
  {
    question: "What is an NFT?",
    answer:
      "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.",
  },
  {
    question: "How do I buy an NFT?",
    answer:
      "To buy an NFT, you need a digital wallet and cryptocurrency (like Ethereum). You can purchase NFTs from marketplaces such as OpenSea, Rarible, and Foundation.",
  },
  {
    question: "How do I sell an NFT?",
    answer:
      "To sell an NFT, you must list it on an NFT marketplace, set a price, and wait for a buyer. Transactions happen on the blockchain, ensuring security and ownership verification.",
  },
  {
    question: "What cryptocurrencies do you accept?",
    answer:
      "Most NFT marketplaces accept Ethereum (ETH), but some also support Solana (SOL), Binance Coin (BNB), and other cryptocurrencies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
       <div className=" relative ">  
       <div className="absolute top-70 bottom-80 left-[1100px] inset-0  circle z-0 "></div>
       </div>
    <div className="max-w-2xl mx-auto p-24">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 font-[Roboto]">
        {faqs.map((faq, index) => (
          <div key={index} className="border  border-gray-400 rounded-lg overflow-hidden w-[100%] p-2">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left px-4 py-3 flex items-center ${
                openIndex === index ? "bg-red-100 bg-opacity-10 rounded-xl m-1 w-[80%] mr-11" : " text-black"
              }`}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="mr-2  font-semibold text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
              <span className="font-semibold">{faq.question}</span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="px-4 py-3 bg-white text-black"
                role="region"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
