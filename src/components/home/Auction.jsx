// Import images
import stellaImg from "/assets/images/stella.png";
import AuctionImg1 from "/assets/images/Auction1.png";
import AuctionImg2 from "/assets/images/Auction2.png";
import AuctionImg3 from "/assets/images/Auction3.png";
import AuctionImg4 from "/assets/images/Auction4.png";
import AuctionImg5 from "/assets/images/Auction5.png";
import AuctionImg6 from "/assets/images/Auction6.png";
import AuctionImg7 from "/assets/images/Auction7..png";
import AuctionImg8 from "/assets/images/Auction8.png";
import Button from "../shared/Button";

const nftData = [
  {
    id: 1,
    image: AuctionImg1,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 2,
    image: AuctionImg2,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 3,
    image: AuctionImg3,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 4,
    image: AuctionImg4,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 5,
    image: AuctionImg5,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 6,
    image: AuctionImg6,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 7,
    image: AuctionImg7,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
  {
    id: 8,
    image: AuctionImg8,
    name: "STELLA NOVA",
    username: "@Stella Nova",
    price: "142.02",
  },
];

export default function Auction() {
  return (
    <section className="">
      <div className=" relative ">
        <div className="absolute top-80 bottom-80 left-96 right-96 inset-0  circle z-0 "></div>
      </div>
      <div className="relative w-full max-w-6xl mx-auto p-10 py-24">
        {/* Section Title */}
        <div className=" flex justify-between md:flex justify-between">
          <h1 className="text-4xl font-bold mb-8 text-left">Auction</h1>
          <Button
            text={"Last 30 Minutes"}
            height={50}
            width={200}
            className={
              "font-[Roboto] flex  flex-row-reverse items-center gap-x-2 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            }
            img={"/assets/icons/trending-btn-icon.png"}
          ></Button>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {nftData.map((nft) => (
            <div
              key={nft.id}
              className=" trend-card p-4 flex flex-col gap-2 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-3">
                <img
                  src={stellaImg}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-bold">{nft.name}</p>
                  <p className="text-xs text-gray-500">{nft.username}</p>
                </div>
              </div>

              {/* NFT Image Section */}
              <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-cover"
                />

                {/* Buy Overlay Section */}
                {/* <div className="absolute bottom-30 left-32 transform -translate-x-1/2 w-[90%] flex justify-between items-center md p-2 rounded-lg">
                <button className=" bg-white  text-gray-600 px-4 py-1 rounded-md">3:06:59:18</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* <Button text={'Explore more '} 
         img={'./assets/icons/explore.png'}
        imgClass={''}
         
         className='bg-gradient mx-auto text-white rounded-sm shadow-md' height={58}  width={200}></Button> */}

        <Button
          className="bg-gradient font-[Roboto] hover:from-red-600 hover:to-red-700 text-white  rounded-md shadow-md px-6 py-3 flex items-center flex-row-reverse justify-center gap-2"
          height={58}
          width={200}
          text={"Explore More"}
          img={"./assets/icons/explore.png"}
          imgClass={"w-4 h-4 "}
        ></Button>
      </div>
    </section>
  );
}
