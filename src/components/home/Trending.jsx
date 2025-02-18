
// Import images
import stellaImg from "/assets/images/stella.png";
import TrendingImg1 from "/assets/images/trending1.png";
import TrendingImg2 from '/assets/images/trending2.png'
import TrendingImg3 from "/assets/images/trending3.png";
import TrendingImg4 from "/assets/images/trending4.png";
import TrendingImg5 from "/assets/images/trending5.png";
import TrendingImg6 from "/assets/images/trending6.png";
import TrendingImg7 from "/assets/images/trending7.png";
import TrendingImg8 from "/assets/images/trending8.png";

const nftData = [
  { id: 1, image: TrendingImg1, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 2, image: TrendingImg2, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 3, image: TrendingImg3, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 4, image: TrendingImg4, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 5, image: TrendingImg5, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 6, image: TrendingImg6, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  {id: 7, image: TrendingImg7, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  { id: 8, image:TrendingImg8, name: "STELLA NOVA", username: "@Stella Nova", price: "142.02" },
  
];


export default function Trending() {
  return (
    <>
    <div className=" relative -ml-24">  
       <div className="absolute inset-0  circle  red blur z-0 "></div>
       </div>
    <div className="relative w-full max-w-6xl mx-auto p-10">
       
      {/* Section Title */}
      <h1 className="text-4xl font-bold mb-8 text-left md:text-4xl sm:text-2xl">Trending NFT'S</h1>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 mx-4 md:grid-cols-4 gap-2  ">
        {nftData.map((nft) => (
          <div key={nft.id} className=" trend-card p-4 flex flex-col gap-4 shadow-lg rounded-lg overflow-hidden">
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

              {/* Buy Overlay Section */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between font-[Roboto] items-center gap-2   p-2 rounded-lg">
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">Buy</button>
                <div className="flex items-center  bg-white shadow-2xl rounded-md px-4 py-1">
                  <span className="text-[10px ] font-semibold">Price:</span>
                  <img
                  src="/assets/images/price.png"
                  alt="crypto"
                  className="w-4 h-4 ml-1"
                />
                  <span className="ml-1 font-bold">{nft.price}</span>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
