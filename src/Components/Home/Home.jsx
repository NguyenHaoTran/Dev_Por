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
        <div className="note">
          <p>Là một cá nhân mới trong lĩnh vực, luôn muốn học hỏi, hoàn thiện bản thân mỗi ngày!</p>
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
      <div className="skills">
        <h2>Skills</h2>
        <div className="items">
          {/* skill */}
          <div className="item">
            <img src="./src/assets/ReactJS.png" alt="" />
            <div className="text">
              <h3>ReactJS</h3>
              <p>
                Công cụ chính để thực hiện các trang web. <br/>
                Có khả năng tìm hiểu, áp dụng những công nghệ mới có liên quan.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="./src/assets/HTML.png" alt="" />
            <div className="text">
              <h3>HTML</h3>
              <p>
                Thành thạo trong việc sử dụng. <br/>
                Có hiểu biết về SEO ở mức khá.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="./src/assets/SASS.png" alt="" />
            <div className="text">
              <h3>SASS</h3>
              <p>
                Luôn áp dụng vào mọi dự án đã và đang thực hiện,<br/>
                cả khi sử dụng ReactJS lẫn các trang web cơ bản.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="./src/assets/Javascript.png" alt="" />
            <div className="text">
              <h3>Javascript</h3>
              <p>
                Đủ kiến thức sử dụng để tạo ra những trang web
                dù không quá chuyên sâu. <br/>
                Luôn luôn muốn học hỏi thêm và rèn luyện mỗi ngày.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="./src/assets/NodeJS.png" alt="" />
            <div className="text">
              <h3>NodeJS</h3>
              <p>
                Áp dụng cho việc sử dụng ReactJS, có hiểu biết về truy xuất dư liệu, API, 
                làm việc với backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
