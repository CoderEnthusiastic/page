import React from "react";
import "./footer.css";

const getData = async (URL) => {
  const res = await window.fetch(URL);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    console.log("ERROR DATA FETCHING!!!");
  }
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="musicbox">
        <img
          src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
          alt="logo"
          width={100}
        />
        <h1>CRYPTOTUNES</h1>
      </div>
      <br />
      <br />
      <hr />
      <div className="faqs">
        <div>FAQS</div>
        <div>Terms & Conditions</div>
        <div>Support</div>
        <div>Privacy Policy</div>
      </div>
      <hr />
      <div className="followBox">
        <p className="follow">Follow Us</p>
        <div className="logos">
          <img
            src="https://i.pinimg.com/736x/51/e2/ff/51e2ff6f08817a661b3eaf8d0a45d1e1.jpg"
            alt="logos"
            width={180}
          />
        </div>
        <div className="logos">
          CryptoTunes, 2022 <br />
          <br />
          All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
