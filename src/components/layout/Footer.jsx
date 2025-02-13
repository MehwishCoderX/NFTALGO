import { FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaDiscord, FaInstagram, FaTiktok, FaReddit, FaGithub } from "react-icons/fa";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import FooterLogo from '/assets/images/footer-logo.png'
export default function Footer() {
  return (
<>
<div className="flex flex-col items-center justify-center space-y-6 p-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold  text-black">
        Ready for Next NFT Drop?
      </h2>

      {/* Email Input Box */}
      <div className="flex items-center border-2 border-red-500 rounded-full p-3 px-6 w-full max-w-lg">
        <input
          type="email"
          placeholder="info@gmail.com"
          className="flex-1 text-lg text-red-500 bg-transparent outline-none placeholder-red-500"
        />
        <button className="bg-gradient-to-r from-red-500 to-red-700 p-3 rounded-xl">
          <PaperAirplaneIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
    <footer className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 md:p-12 mx-28 rounded-2xl">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start ">
        
        {/* Left Section - Logo & Text */}
        <div className="md:w-2/5 space-y-4">
          <div className="flex items-center space-x-2">
            <img src={FooterLogo} alt="Fry Networks"  />
           
          </div>
          <div>
          <p className="text-sm">
            NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
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
        </div>

        {/* Right Section - Links */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">About NFT</a></li>
            <li><a href="#" className="hover:text-gray-300">Live Auctions</a></li>
            <li><a href="#" className="hover:text-gray-300">Collection</a></li>
            <li><a href="#" className="hover:text-gray-300">Activity</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

// Social Icon Component
const SocialIcon = ({ Icon }) => (
  <div className="p-2 bg-white rounded-full text-red-500 hover:bg-gray-200 cursor-pointer transition-all">
    <Icon className="w-5 h-5" />
  </div>
);
