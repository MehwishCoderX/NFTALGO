
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
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import FooterLogo from '/assets/images/footer-logo.png';

export default function Footer() {
  return (
    <>
      {/* Header Section */}
      <div className="footer-header-container">
        <h2 className="footer-heading">
          Ready for Next NFT Drop?
        </h2>

        <div className="input-box">
          <input
            type="email"
            placeholder="info@gmail.com"
            className="email-input"
          />
          <button className="btn-send">
            <PaperAirplaneIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-inner-container">
          <div>
            <img src="/assets/images/footer-bg.png" alt="" height={100} className="p-0" />
          </div>
          <div className="footer-content">
            <div className="logo-container">
              <img src={FooterLogo} alt="Fry Networks" />
            </div>

            <div className="footer-info">
              <p className="footer-text">
                NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell, and bid NFTs and get rich.
              </p>
              <div className="social-icons">
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

            <div className="footer-links-container">
              <h3 className="footer-links-heading">About</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link-item">About NFT</a></li>
                <li><a href="#" className="footer-link-item">Live Auctions</a></li>
                <li><a href="#" className="footer-link-item">Collection</a></li>
                <li><a href="#" className="footer-link-item">Activity</a></li>
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
  <div className="btn-social">
    <Icon className="w-5 h-5" />
  </div>
);
