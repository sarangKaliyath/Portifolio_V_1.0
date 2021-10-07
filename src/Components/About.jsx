import React from "react";
import "./About.css";
import { saveAs } from "file-saver";

export const About = () => {
  const handleDownload = () => {
    saveAs(
      "https://drive.google.com/u/0/uc?id=1ggrGCygppq9ViSJ9cdVpwBDWOq4481EJ&export=download",
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
          <h2>About Me</h2>

          <h4>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </h4>
        </div>
      </div>
      <div className="about_contact">
        <h2>Contact Details</h2>
        <h4>
          <div>Sarang Kaliyath</div>
          <div>75 8830 3199</div>
          <div>sarang1221@gmail.com</div>
        </h4>
        <div>
          <div className="about_button">
            
            <button onClick={handleDownload}>
               <img src="/download.png" alt="" />
               DOWNLOAD CV 
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
