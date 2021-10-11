import React from "react";
import "./About.css";
import { saveAs } from "file-saver";
import { Skills } from "./Skills";

export const About = () => {
  const handleDownload = () => {
    saveAs(
      "https://drive.google.com/file/d/1WlxLkivnuMQNYNz2ymIMBtIg96_ZKsCA/view?usp=sharing",
      "resume.pdf"
    );
  };

  return (
    <div id="about" className="main_container">
      <div className="about_me_container">
        <div className="about_me_image">
          <img src="/user-02.jpg" alt="" />
        </div>
        <div>
          <h2 style={{ fontSize: "2em" }} className="About_me">
            About Me
          </h2>

          <h4>
            <div>
              <p>
                <div>
                  My name is Sarang Kaliyath. Started as an Electrical engineer
                  but soon found the light in web development.
                </div>
                <div>
                  It's barely been a minute since I have started learning to
                  code, building simple real-world apps is something I duly
                  cherish.
                </div>
              </p>
              <p>
                <div>
                  To quote Steve Jobs “The only way to do great work is to love
                  what you do. If you haven’t found it yet, keep looking. Don’t
                  settle.”
                </div>
              </p>
              <p>
                <div>
                  I am diligently looking for opportunities to work as a web
                  developer.
                </div>
              </p>
            </div>
          </h4>
        </div>
      </div>
      <div className="about_skills">
        <Skills cStyle="html" text={"HTML"} />
        <Skills cStyle="css" text={"CSS"} />
        <Skills cStyle="javaScript" text={"JavaScript"} />
        <Skills cStyle="react" text={"React"} />
        <Skills cStyle="node" text={"Node.js"} />
        <Skills cStyle="express" text={"Express"} />
        <Skills cStyle="mongo" text={"MongoDB"} />
      </div>
      <div>
        <div className="cv_button">
          <button onClick={handleDownload}>
            {/* <img src="/download.png" alt="" /> */}
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
    </div>
  );
};
