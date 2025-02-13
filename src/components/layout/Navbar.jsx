import React from "react";
import Logo from "/assets/images/Nft-logo.png";
import Button from "../shared/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-4 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Fry Networks" className="" />
        
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-red-500 font-bold border-b-2 border-red-500">
          HOME
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          AI NFT GENERATION
        </a>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
          Connect Wallet
        </button>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
          Create NFT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
