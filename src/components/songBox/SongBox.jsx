import React from "react";
import "./songBox.css";

export default function SongBox() {
  return (
    <div className="songBox">
      <h1 className="songDetails">Song Details</h1>
      <img
        className="songBanner"
        src="https://i.scdn.co/image/ab67616d0000b273b4c31a5b5126ca66cbef924e"
        alt="song-banner"
      />
      <h1>God Is Good</h1>
      <h3>iShowSpeed</h3>
      <br />
      <h3>Owner : </h3>
      <br />
      <div className="price">
        <h2>
          Price : 5{"eth"}
        </h2>
        <button id="btn">BUY NOW</button>
      </div>
    </div>
  );
}
