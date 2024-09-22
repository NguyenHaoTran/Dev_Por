import React from "react";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects_container">
      <h2>Các dự án</h2>
      <div className="cards">
          {/* Card */}
          <div className="card" >
            <div className="img">
              <img src="src\assets\web_test.jpeg" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div>

          <div className="card" >
            <div className="img">
              <img src="src\assets\web_test.jpeg" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div>

          <div className="card" >
            <div className="img">
              <img src="src\assets\web_test.jpeg" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src="src\assets\web_test.jpeg" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projects;
