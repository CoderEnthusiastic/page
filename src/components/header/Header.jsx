import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <div className="logoAndName">
        <img
          src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
          alt="logo-cryptomusic"
          width={50}
        />
        <h2>CryptoMusic</h2>
      </div>
      <div className="menuBar">
        <div className="menu">HOME</div>
        <div className="menu">MARKETPLACE</div>
        <div className="menu">CREATE</div>
        <div className="menu">SIGN-IN</div>
      </div>
    </div>
  );
}

export default Header;
