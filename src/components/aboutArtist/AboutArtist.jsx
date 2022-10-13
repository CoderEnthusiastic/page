import React from "react";
import "./aboutArtist.css";

function AboutArtist() {
  return (
    <div className="ArtistBox">
      <div className="text">
        <h1>About Artist</h1>
        <h4>iShowSpeed is an young artist from Ohio</h4>
        <br />
        <br />
        <br />
        <br />
        <div className="outerBox">
          <div className="socialMedia" id="box">
            <h2>Follow on Social Media</h2>
            <br />
            <img
              width={150}
              src="https://pbs.twimg.com/media/EeK6h9qWAAAegC2.png"
              alt=""
            />
          </div>
          <div className="musicPlatform" id="box">
            <h2>Follow on Music Platforms</h2>
            <br />
            <br />
            <img
              width={150}
              src="https://as1.ftcdn.net/v2/jpg/03/76/70/84/1000_F_376708478_RroclKeT4upylGBhlZ5B2o1rDf6MFNnX.jpg"
              alt="music-platform"
            />
          </div>
        </div>
      </div>
      <img
        className="speed1"
        src="https://deluxe.news/wp-content/uploads/2022/04/Streamer-iShowSpeed-%E2%80%8B%E2%80%8BBanned-From-Valorant-After-Sexist-Rant-780x470.jpg"
        alt="iShowSpeed"
        width={450}
      />
    </div>
  );
}

export default AboutArtist;
