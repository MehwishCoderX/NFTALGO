

import React from "react";

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-80">
      <div className="grid grid-cols-2 gap-4">
        {/* First row with 2 images */}
        {artwork.images.slice(0, 2).map((img, index) => (
          <img key={index} src={img} alt={`artwork-${index}`} className="rounded-lg w-full h-24 object-cover col-span-1" />
        ))}
        {/* Second row with 4 images */}
        <div className="grid grid-cols-4 gap-4 col-span-2">
          {artwork.images.slice(2, 6).map((img, index) => (
            <img key={index} src={img} alt={`artwork-${index}`} className="rounded-lg w-full h-20 object-cover" />
          ))}
        </div>
      </div>
      <div className="flex items-center mt-4">
        <img
          src={artwork.creatorImage}
          alt="creator"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-bold text-lg">{artwork.title}</h3>
          <p className="text-gray-600 text-sm">
            Created by <strong>{artwork.creator}</strong>
          </p>
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
      creatorImage: "/assets/images/collectioni.png",
      images: [
        "/assets/images/collection1i.png", 
        "/assets/images/collection2i.png", 
        "/assets/images/collection3i.png", 
        "/assets/images/collection4i.png", 
        "/assets/images/collection5i.png", 
        "/assets/images/collection6i.png"
      ]
    },
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "/assets/images/collectioni.png",
      images: [
        "/assets/images/collection1i.png", 
        "/assets/images/collection2i.png", 
        "/assets/images/collection3i.png", 
        "/assets/images/collection4i.png", 
        "/assets/images/collection5i.png", 
        "/assets/images/collection6i.png"
      ]
    },
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "/assets/images/collectioni.png",
      images: [
        "/assets/images/collection1i.png", 
        "/assets/images/collection2i.png", 
        "/assets/images/collection3i.png", 
        "/assets/images/collection4i.png", 
        "/assets/images/collection5i.png", 
        "/assets/images/collection6i.png"
      ]
    },
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "/assets/images/collectioni.png",
      images: [
        "/assets/images/collection1i.png", 
        "/assets/images/collection2i.png", 
        "/assets/images/collection3i.png", 
        "/assets/images/collection4i.png", 
        "/assets/images/collection5i.png", 
        "/assets/images/collection6i.png"
      ]
    },
    {
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "/assets/images/collectioni.png",
      images: [
        "/assets/images/collection1i.png", 
        "/assets/images/collection2i.png", 
        "/assets/images/collection3i.png", 
        "/assets/images/collection4i.png", 
        "/assets/images/collection5i.png", 
        "/assets/images/collection6i.png"
      ]
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-left">Top Collecttion</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={index} artwork={artwork} />
        ))}
      </div>
      <p className="text-red-500 font-bold text-lg mt-4 cursor-pointer hover:underline">
        View More Collection
      </p>
    </div>
  );
};

export default Collection;
