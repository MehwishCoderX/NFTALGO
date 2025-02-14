import React from "react";

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-80">
      <div className="grid grid-cols-2 gap-2">
        {artwork.images.map((img, index) => (
          <img key={index} src={img} alt="artwork" className="rounded-lg" />
        ))}
      </div>
      <div className="flex items-center mt-4">
        <img
          src={artwork.creatorImage}
          alt="creator"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-bold text-lg">{artwork.title}</h3>
          <p className="text-gray-600 text-sm">Created by <strong>{artwork.creator}</strong></p>
        </div>
      </div>
    </div>
  );
};

const Collection = () => {
  const artworks = [
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "https://via.placeholder.com/40",
      images: [
        "https://via.placeholder.com/100/FF5733", 
        "https://via.placeholder.com/100/6A0DAD",
        "https://via.placeholder.com/100/FFD700",
        "https://via.placeholder.com/100/1E90FF"
      ]
    },
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "https://via.placeholder.com/40",
      images: [
        "https://via.placeholder.com/100/FFFF00", 
        "https://via.placeholder.com/100/ADD8E6",
        "https://via.placeholder.com/100/87CEEB",
        "https://via.placeholder.com/100/FFA07A"
      ]
    },
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "https://via.placeholder.com/40",
      images: [
        "https://via.placeholder.com/100/DC143C", 
        "https://via.placeholder.com/100/4169E1",
        "https://via.placeholder.com/100/DA70D6",
        "https://via.placeholder.com/100/2E8B57"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={index} artwork={artwork} />
        ))}
      </div>
      <p className="text-red-500 font-bold text-lg mt-4">View More Collection</p>
    </div>
  );
};

export default Collection;
