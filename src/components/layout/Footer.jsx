
// import { 
//   FaFacebookF, 
//   FaTelegramPlane, 
//   FaLinkedinIn, 
//   FaDiscord, 
//   FaInstagram, 
//   FaTiktok, 
//   FaReddit, 
//   FaGithub 
// } from "react-icons/fa";
// import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
// import FooterLogo from '/assets/images/footer-logo.png';

// export default function Footer() {
//   return (
//     <>
//       {/* Header Section */}
//       <div className="footer-header-container">
//         <h2 className="footer-heading">
//           Ready for Next NFT Drop?
//         </h2>

//         <div className="input-box">
//           <input
//             type="email"
//             placeholder="info@gmail.com"
//             className="email-input"
//           />
//           <button className="btn-send">
//           <img
//     src="/assets/icons/footer-input-icon.png"
//     alt="Custom Icon"
//     className="w-6 h-6 "
//   />
//           </button>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="footer-container">
//         <div className="footer-inner-container">
//           <div>
//             <img src="/assets/images/footer-bg.png" alt="" height={100} className="p-0" />
//           </div>
//           <div className="footer-content">
//             <div className="logo-container">
//               <img src={FooterLogo} alt="Fry Networks" />
//             </div>

//             <div className="footer-info">
//               <p className="footer-text">
//                 NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.
//               </p>
//               <div className="social-icons">
//                 <SocialIcon Icon={FaFacebookF} />
//                 <SocialIcon Icon={FaTelegramPlane} />
//                 <SocialIcon Icon={FaLinkedinIn} />
//                 <SocialIcon Icon={FaDiscord} />
//                 <SocialIcon Icon={FaInstagram} />
//                 <SocialIcon Icon={FaTiktok} />
//                 <SocialIcon Icon={FaReddit} />
//                 <SocialIcon Icon={FaGithub} />
//               </div>
//             </div>

//             <div className="footer-links-container">
//               <h3 className="footer-links-heading">About</h3>
//               <ul className="footer-links">
//                 <li><a href="#" className="footer-link-item">About NFT</a></li>
//                 <li><a href="#" className="footer-link-item">Live Auctions</a></li>
//                 <li><a href="#" className="footer-link-item">Collection</a></li>
//                 <li><a href="#" className="footer-link-item">Activity</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// // Social Icon Component
// const SocialIcon = ({ Icon }) => (
//   <div className="btn-social">
//     <Icon className="w-5 h-5" />
//   </div>
// );

import { 
  FaFacebookF, 
  FaTelegramPlane, 
  FaLinkedinIn, 
  FaDiscord, 
  FaInstagram, 
  FaTiktok, 
  FaReddit, 
  FaGithub 
} from "react-icons/fa";
import FooterLogo from '/assets/images/footer-logo.png';

export default function Footer() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-around space-y-6 p-8">
        <h2 className="text-4xl font-bold text-black">
          Ready for Next NFT Drop?
        </h2>

        <div className="flex items-center border-2 border-red-500 rounded-xl p-3 px-6 w-full max-w-lg">
          <input
            type="email"
            placeholder="info@gmail.com"
            className="flex-1 text-lg text-red-500 bg-transparent outline-none placeholder-red-500"
          />
          <button className="bg-gradient-to-r from-red-500 to-red-700 p-3 rounded-xl">
            <img
              src="/assets/icons/footer-input-icon.png"
              alt="Custom Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className=" overflow-x-hidden bg-gradient-to-r from-red-500 to-red-600 text-white p-8 md:p-0 mx-28 rounded-2xl font-roboto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <img src="/assets/images/footer-bg.png" alt="" height={100} className="p-0" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-24">
            <div className="flex items-center">
              <img src={FooterLogo} alt="Fry Networks" />
            </div>

            <div className="space-y-4 text-center sm: flex flex-col">
              <p className="text-sm">
                NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.
              </p>
              <div className="flex space-x-3 mt-4 justify-center ">
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

            <div className="text-center md:w-1/3 mt-6 md:mt-0">
              <h3 className="text-lg font-bold mb-3">About</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">About NFT</a></li>
                <li><a href="#" className="hover:text-gray-300">Live Auctions</a></li>
                <li><a href="#" className="hover:text-gray-300">Collection</a></li>
                <li><a href="#" className="hover:text-gray-300">Activity</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Social Icon Component
const SocialIcon = ({ Icon }) => (
  <div className="p-2 bg-white rounded-xl text-red-500 hover:bg-gray-200 cursor-pointer transition-all inline-flex items-center justify-center">
    <Icon className="w-5 h-5" />
  </div>
);
