import Logo from "../../assets/images/logo.svg";
import IconHamburger from "../../assets/images/icon-hamburger.svg";
import IconClose from "../../assets/images/icon-close.svg";

import { useState } from "react";

import ToggleMenu from "./ToggleMenu";

const NavBar = () => {
  const [menu, setMenu] = useState();

  return (
    <nav className="NavBar">
      <img src={Logo} />

      <ul className="NavBar__Menu">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>

      <button
        onClick={() => {
          ToggleMenu();
          setMenu(!menu);
        }}
      >
        {!menu ? <img src={IconHamburger} /> : <img src={IconClose} />}
      </button>
    </nav>
  );
};

export default NavBar;
