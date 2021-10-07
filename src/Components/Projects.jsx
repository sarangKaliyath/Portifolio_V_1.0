import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="container" id="projects">
      <div>
        <h1>Projects</h1>
      </div>
      <div>
        <div className="project_container">
          <div>
            <div>
              <h2>Nykaa</h2>
              <div>
                <img src="/github.svg" alt="" />
              </div>
            </div>
            <h4>
              <div>
                Clone of a Popular E-commerce Website that sells beauty,
                wellness, and fashion products.
              </div>
            </h4>
            <div className="project_image">
              <img src="/home_page.png" alt="" />
            </div>
            <div>
              <h4>Built using JS, HTML and, CSS</h4>
            </div>
          </div>
          <div>
            <div>
              <h2>Nykaa V2.0</h2>
              <div>
                <img src="/github.svg" alt="" />
              </div>
            </div>
            <h4>
              <div>
                Clone of a Popular E-commerce Website that sells beauty,
                wellness, and fashion products
              </div>
            </h4>
            <div className="project_image">
              <img src="/home_page.png" alt="" />
            </div>
            <h4>Built using Express,MongoDB, Node.js</h4>
          </div>

          <div>
            <div>
              <h2>Star Wars</h2>
              <div>
                <img src="/github.svg" alt="" />
              </div>
            </div>
            <h4>
              <div>
                A self designed project inspired by characters of
                {/* wellness, and fashion products */}
              </div>
              <div>Star Wars franchise.</div>
            </h4>
            <div className="project_image">
              <img src="/placeholder.png" alt="" />
            </div>
            <h4>Built using JS, HTML and, CSS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
