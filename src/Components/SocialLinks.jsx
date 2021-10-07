import React from "react";
import "../Components/SocialLinks.css";

export const SocialLinks = () => {
  const handleClick = (e) => {
    window.location.assign(e);
  };

  return (
    <div>
      <div className="data" id="home">
        <div>
          <h1>I'm Sarang Kaliyath.</h1>
        </div>
        <div>
          <h3>
            I am a Full Stack Web Developer focusing on creating seamless user
            friendly applications.
          </h3>
          <div className="links_container">
            <div className="links_image">
              <img
                src="/github.svg"
                alt=""
                onClick={() => {
                  handleClick("https://github.com/sarangKaliyath");
                }}
              />
              <img
                src="/twitter.svg"
                alt=""
                onClick={() => {
                  handleClick("https://twitter.com/KaliyathSarang");
                }}
              />
              <img
                src="/linkedin.svg"
                alt=""
                onClick={() => {
                  handleClick(
                    "https://www.linkedin.com/in/sarang-kaliyath-84034a122/"
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
