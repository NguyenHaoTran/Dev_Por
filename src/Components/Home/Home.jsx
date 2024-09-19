import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <div className="contents">
        <div className="name">
          <h1>
            TRẦN NGUYÊN <br />
            <span>HÀO</span>
          </h1>
          <p>
            frontend devoloper <i class="ri-code-s-slash-line"></i>
          </p>
        </div>
        <div className="gif">
          <img src=".\src\assets\Gif.gif" alt="" />
        </div>
        <div className="cv">
          <a>Download my CV</a>
          <i class="ri-arrow-down-line"></i>
        </div>
      </div>
      {/* projects */}
      <div className="projects">
        <h2>Projects</h2>
        <div className="cards">
          {/* Card */}
          <div className="card">
            <div class="content">
              <h2>001</h2>
              <h3>Card One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ea sapiente fuga, animi magnam earum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="card">
            <div class="content">
              <h2>001</h2>
              <h3>Card One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ea sapiente fuga, animi magnam earum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="card">
            <div class="content">
              <h2>001</h2>
              <h3>Card One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ea sapiente fuga, animi magnam earum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="card">
            <div class="content">
              <h2>001</h2>
              <h3>Card One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ea sapiente fuga, animi magnam earum.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/*Skills */}
    </div>
  );
};

export default Home;
