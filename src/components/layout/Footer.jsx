import { FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaDiscord, FaInstagram, FaTiktok, FaReddit, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section - Logo & Text */}
        <div className="md:w-2/5 space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Fry Networks" className="w-12 h-12" />
            <h2 className="text-xl font-bold">Fry Networks</h2>
          </div>
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
  );
}

// Social Icon Component
const SocialIcon = ({ Icon }) => (
  <div className="p-2 bg-white rounded-full text-red-500 hover:bg-gray-200 cursor-pointer transition-all">
    <Icon className="w-5 h-5" />
  </div>
);
