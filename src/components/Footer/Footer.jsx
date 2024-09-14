import LogoWhite from "../../assets/images/logoWhite";
import IconFacebook from "../../assets/images/IconFacebook";
import IconInstagram from "../../assets/images/IconInstagram";
import IconPinterest from "../../assets/images/IconPinterest";
import IconTwitter from "../../assets/images/IconTwitter";
import IconYoutube from "../../assets/images/IconYoutube";

export default function FooterSection(params) {
  return (
    <footer className="Footer">
      <div>
        <form className="Footer__Form">
          <input type="text" placeholder="Updates in your inbox..." />
          <button>GO</button>
        </form>

        <span className="Footer__Copiryght">Copiryght 2020. All Rights Reserved</span>
      </div>

      <div className="Footer__MenuContainer">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="Footer__Social__container">
        <div className="Footer__Social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconYoutube />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconTwitter />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPinterest />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
          </a>
        </div>

        <a href="#" className="Footer__Logo">
          <LogoWhite />
        </a>
      </div>
      <span>Copiryght 2020. All Rights Reserved</span>
    </footer>
  );
}
