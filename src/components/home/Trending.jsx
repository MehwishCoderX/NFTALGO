// Import images
import Card from "../shared/Card";
import TrendingImg1 from "/assets/images/trending1.png";
import TrendingImg2 from "/assets/images/trending2.png";
import TrendingImg3 from "/assets/images/trending3.png";
import TrendingImg4 from "/assets/images/trending4.png";
import TrendingImg5 from "/assets/images/trending5.png";
import TrendingImg6 from "/assets/images/trending6.png";
import TrendingImg7 from "/assets/images/trending7.png";
import TrendingImg8 from "/assets/images/trending8.png";

const nftData = [
  {
    id: 1,
    image: TrendingImg1,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 2,
    image: TrendingImg2,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 3,
    image: TrendingImg3,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 4,
    image: TrendingImg4,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 5,
    image: TrendingImg5,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 6,
    image: TrendingImg6,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 7,
    image: TrendingImg7,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 8,
    image: TrendingImg8,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
];

export default function Trending() {
  return (
    <>
      <section>
        <div className=" relative -ml-24">
          <div className="absolute inset-0  circle  red blur z-0 "></div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto p-10 py-24">
          {/* Section Title */}

          <h1 className="text-4xl font-bold mb-8 text-left md:text-4xl sm:text-2xl">
            Trending NFT'S
          </h1>

          {/* NFT Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 mx-4 md:grid-cols-4 gap-2   gap-3 ">
              {nftData.map((nft) => (
                <div key={nft.id}>
                <Card
                  image={nft.image}
                  name={nft.name}
                  username={nft.username}
                  price={nft.price}
                  showButton={true}
                 
                />
                 </div>
              ))}
            </div>
          </div>
        </div>

        <div />
      </section>
    </>
  );
}
