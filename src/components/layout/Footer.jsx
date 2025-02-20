
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaReddit,
  FaGithub,
} from "react-icons/fa";
import FooterLogo from "/assets/images/footer-logo.png";

export default function Footer() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 p-6 md:p-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Ready for Next NFT Drop?
        </h2>

        <div className="flex items-center  font-[Roboto] border-2 border-red-500 rounded-xl p-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 text-lg text-red-500 bg-transparent outline-none placeholder-red-500 px-3"
          />
          <button className="bg-gradient-to-r from-red-500 to-red-700 p-3 rounded-xl">
            <img
              src="/assets/icons/footer-input-icon.png"
              alt="Submit"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className=" bg-gradient flex font-[Roboto]    text-white md: rounded-2xl font-roboto lg:mx-32 sm:mx-0  rounded-sm">
        
      <div className=" md:mb-0">
            <img
              src="/assets/images/footer-bg.png"
              alt="Footer Background"
              className="w-full  max-w-[200px] md:max-w-[250px]"
            />
          </div>
        
        <div className="flex justify-evenly ">
        <div className="gap-20 max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left">
          
         
          {/* <div className=" lg:-ml-24  md:-ml-24 md:mb-24  sm:ml-0  sm:pt-10"> <img src={FooterLogo} alt="Fry Networks" className="pr-8 md:w-50" /></div> */}

          <div className="lg:-ml-24 md:-ml-24 md:mb-24 sm:ml-0 sm:pt-10 "> 
  <img src={FooterLogo} alt="Fry Networks" className="pr-8 md:w-50" />
</div>

          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 w-full ">
            <div className="flex flex-col items-center md:items-start">
             
              <p className="text-sm mt-8 max-w-xs leading-6 ">
                NFT ALGO is the world’s leading NFTs marketplace where you can
                discover, sell, and bid NFTs and get rich.
              </p>
              <div className="flex space-x-3 mt-4 ">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaTelegramPlane} />
                <SocialIcon Icon={FaLinkedinIn} />
                <SocialIcon Icon={FaDiscord} />
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaTiktok} />
                <SocialIcon Icon={FaReddit} />
                <SocialIcon Icon={FaGithub} />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-3">About</h3>
              <ul className="space-y-2 text-sm leading-8">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About NFT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Live Auctions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Activity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
        </div>

        </div>

      </footer>
    </>
  );
}

// Social Icon Component
const SocialIcon = ({ Icon }) => (
  <div className="p-2 bg-white rounded-xl text-red-500 hover:bg-gray-200 cursor-pointer transition-all flex items-center justify-center">
    <Icon className="w-5 h-5" />
  </div>
);
