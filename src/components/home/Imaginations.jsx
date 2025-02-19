// import React from "react";
// import Button from '../shared/Button'


// const avatars = [
//   { src: "/assets/images/Imagination1.png", top: "10%", left: "20%"  },
//   { src: "/assets/images/Imagination2.png", top: "30%", left: "5%" },
//   { src: "/assets/images/Imagination3.png", top: "70%", left: "15%" },
//   { src: "/assets/images/Imagination4.png", top: "90%", left: "50%" },
//   { src: "/assets/images/Imagination5.png", top: "20%", left: "80%" },
//   { src: "/assets/images/Imagination6.png", top: "60%", left: "85%" },
// ];
// const ImageGenerator = () => {
//   return (

//     <section className="py-24">

//        <div className=" text-center px-36">
//         <h1 className=" text-6xl">Turn your imagination into digital Asset </h1>
//       </div>
//     <div className="relative w-full h-screen flex items-center justify-center px-36">
//       {/* Red glowing effect */}
    

//       {/* Input section */}
     
//       <div className="relative z-10 flex items-center gap-3.5  py-4 rounded-lg shadow-lg font-[Roboto]">
//         <input
//           type="text"
//           placeholder="Fantasy Creature holding a sword..."
//           className="outline-none border-none px-4 w-[400px]"
//         />
//      <Button
//           className="bg-gradient font-[Roboto] hover:from-red-600 hover:to-red-700 text-white p-4 mx-6 rounded-md shadow-md px-6 py-3 flex items-center flex-row-reverse justify-center gap-2"
//           height={45}
//           width={150}
        
//           text={"Generate"}
//           img={"./assets/icons/imag-input-icon.png"}
//           imgClass={"w-5 h-5  "}
//         ></Button>
//       </div>

//       {/* Floating avatar images */}
//       <div className="absolute flex flex-wrap w-full h-full ">
//         {avatars.map((avatar, index) => (
//           <div
//             key={index}
//             className="absolute  p-1 rounded-lg shadow"
//             style={{ top: avatar.top, left: avatar.left }}
//           >
//             <img src={avatar.src} alt="Avatar" className="w-36 h-36" />
//           </div>
//         ))}
//       </div>
//     </div>
//     </section>
//   );
// };



// export default ImageGenerator;

import React from "react";
import Button from '../shared/Button'


const avatars = [
  { src: "/assets/images/Imagination1.png", top: "10%", left: "20%"  },
  { src: "/assets/images/Imagination2.png", top: "30%", left: "5%" },
  { src: "/assets/images/Imagination3.png", top: "70%", left: "15%" },
  { src: "/assets/images/Imagination4.png", top: "90%", left: "50%" },
  { src: "/assets/images/Imagination5.png", top: "20%", left: "80%" },
  { src: "/assets/images/Imagination6.png", top: "60%", left: "85%" },
];
const ImageGenerator = () => {
  return (

    <section className="py-24">
  
       <div className=" text-center px-36 ">
       <div className=" relative ">
        <div className="absolute top-80 bottom-80 left-48 right-96 inset-0  circle -z-1 "></div>
      </div>
        <h1 className=" text-6xl uppercase">Turn your imagination into digital Asset </h1>
      </div>
    <div className="relative w-full h-screen flex items-center justify-center px-36">
      {/* Red glowing effect */}
    

      {/* Input section */}
     
      <div className="relative bg-white z-10 flex items-center gap-3.5  py-4 rounded-lg shadow-lg font-[Roboto]">
        <input
          type="text"
          placeholder="Fantasy Creature holding a sword..."
          className="outline-none border-none px-4 w-[400px] "
        />
     <Button
          className="bg-gradient font-[Roboto] hover:from-red-600 hover:to-red-700 text-white p-4 mx-6 rounded-md shadow-md px-6 py-3 flex items-center flex-row-reverse justify-center gap-2"
          height={45}
          width={150}
        
          text={"Generate"}
          img={"./assets/icons/imag-input-icon.png"}
          imgClass={"w-5 h-5  "}
        ></Button>
      </div>

      {/* Floating avatar images */}
      <div className="absolute flex flex-wrap w-full h-full ">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="absolute  p-1 rounded-lg shadow"
            style={{ top: avatar.top, left: avatar.left }}
          >
            <img src={avatar.src} alt="Avatar" className="w-36 h-36" />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};



export default ImageGenerator;
