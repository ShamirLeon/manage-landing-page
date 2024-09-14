import Logo from "../../assets/images/logo.svg";
import IconHamburger from "../../assets/images/icon-hamburger.svg";
import IconClose from "../../assets/images/icon-close.svg";

import { useState } from "react";

import ToggleMenu from "./ToggleMenu";

const NavBar = () => {
  const [menu, setMenu] = useState();

  return (
    <nav className="NavBar">
      <div>
        <img src={Logo} />
      </div>

      <ul className="NavBar__Menu">
        <li>
          Pricing
        </li>
        <li>
          Product
        </li>
        <li>
          About
         Us</li>
        <li>
          Careers
        </li>
        <li>
          Community
        </li>
      </ul>

      <button className="NavBar__Cta">
        Get Started
      </button>

      <button
        onClick={() => {
          ToggleMenu();
          setMenu(!menu);
        }}
        className="NavBar__Button"
      >
        {!menu ? <img src={IconHamburger} /> : <img src={IconClose} />}
      </button>
    </nav>
  );
};

export default NavBar;
