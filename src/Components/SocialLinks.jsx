import React from "react";
import "../Components/SocialLinks.css";
import { gotoLink } from "./Onclick_function.js";

export const SocialLinks = () => {
  return (
    <div>
      <div className="data" id="home">
        <div>
          <h1 className="home_title">I'm Sarang Kaliyath.</h1>
        </div>
        <div>
          <h3 className="home_text">
            I'm a Full Stack Web Developer emphasizing on creating seamless user
            friendly applications.
          </h3>
          <div className="links_container">
            <div className="links_image">
              <img
                src="/github_light.svg"
                alt=""
                onClick={() => {
                  gotoLink("https://github.com/sarangKaliyath");
                }}
              />
              <img
                src="/twitter.svg"
                alt=""
                onClick={() => {
                  gotoLink("https://twitter.com/KaliyathSarang");
                }}
              />
              <img
                src="/linkedin.svg"
                alt=""
                onClick={() => {
                  gotoLink(
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
