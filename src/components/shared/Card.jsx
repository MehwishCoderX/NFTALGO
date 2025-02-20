
import React from "react";
import stellaImg from "/assets/images/stella.png";

const Card = (props) => {
  return (
    <div className="card rounded-xl max-w-sm sm:max-w-md md:max-w-lg bg-cover bg-center relative">
      {/* Profile Section */}
      <div className="flex items-center px-4 py-2 mb-2 mt-2">
        <img src={stellaImg} alt="profile" className="w-14 h-14 rounded-full" />
        <div>
          <p className="text-sm font-bold">{props.name}</p>
          <p className="text-xs text-gray-500">{props.username}</p>
        </div>
      </div>

      {/* NFT Image Section */}
      <div className="relative m-2">
        <img
          src={props.image}
          alt={props.name}
          className="w-[100%] h-auto rounded-md object-cover"
        />
      </div>

      {/* Buttons & Price Section */}
      {(props.showButton || props.price) && (
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          {props.showButton && (
            <button className="bg-gradient text-white px-4 py-1 rounded-md text-sm">
              Buy
            </button>
          )}
          {props.price && (
            <div className="bg-white p-1 rounded-lg shadow-sm flex items-center font-[Roboto]">
              <span className="text-gray-700 text-sm font-semibold">Price:</span>
              <img
                src="/assets/images/price.png"
                alt="crypto"
                className="w-4 h-4 ml-1"
              />
              <span className="ml-1 text-black text-sm">{props.price}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
