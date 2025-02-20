
import React from "react";
import Button from "../shared/Button";

const avatars = [
  { src: "/assets/images/Imagination1.png", top: "10%", left: "20%" },
  { src: "/assets/images/Imagination2.png", top: "30%", left: "5%" },
  { src: "/assets/images/Imagination3.png", top: "70%", left: "15%" },
  { src: "/assets/images/Imagination4.png", top: "90%", left: "50%" },
  { src: "/assets/images/Imagination5.png", top: "20%", left: "80%" },
  { src: "/assets/images/Imagination6.png", top: "60%", left: "85%" },
];

const ImageGenerator = () => {
  return (
  
    <section className="py-24">
       <div className=" relative top-64 left-72">  
       <div className="absolute inset-0  circle  red blur z-0 "></div>
       </div>
      <div className="text-center">
        <h1 className="lg:text-6xl uppercase md:text-5xl sm:text-4xl text-3xl">
          Turn your imagination <br /> into a digital Asset
        </h1>
      </div>

      <div className="relative w-full h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-36">
        {/* Input section */}
        <div className="relative bg-white z-10 px-4 flex items-center gap-3.5 py-4 rounded-lg shadow-lg font-[Roboto] w-full max-w-xl">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="outline-none border-none w-full px-4 py-2 text-sm sm:text-base rounded-md"
          />
          <Button
            className="bg-gradient font-[Roboto] hover:from-red-600 hover:to-red-700 text-white p-4 mx-2 rounded-md shadow-md px-4 py-2 flex items-center gap-2"
            height={45}
            width={150}
            text={"Generate"}
            img={"./assets/icons/imag-input-icon.png"}
            imgClass={"w-5 h-5"}
          />
        </div>

        {/* Floating avatar images */}
        <div className="absolute flex flex-wrap w-full h-full">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="absolute p-1 rounded-lg shadow"
              style={{ top: avatar.top, left: avatar.left }}
            >
              <img
                src={avatar.src}
                alt="Avatar"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;
