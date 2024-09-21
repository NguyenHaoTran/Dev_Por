import React from "react";
import "./home.scss";
import { useEffect } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";

const Home = () => {
  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(`.name`, { origin: "left", interval: 200 });
    sr.reveal(`.gif`, { origin: "right", interval: 200 });
    sr.reveal(`.note`, { origin: "bottom", interval: 200 });
    sr.reveal(`.cv`, { origin: "bottom", interval: 200 });
    //
    sr.reveal(`.projects`, { origin: "bottom", interval: 200 });
    sr.reveal(`.item`, { origin: "top", interval: 200 });
  }, []);

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
          <p>
            Là một cá nhân mới trong lĩnh vực, luôn muốn học hỏi, hoàn thiện bản
            thân mỗi ngày!
          </p>
        </div>
        <div className="cv">
          <a>Tải xuống CV</a>
          <i class="ri-arrow-down-line"></i>
        </div>
      </div>
      {/* projects */}
      <div className="projects">
        <h2>Các dự án</h2>
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
        <h2>Kỹ năng</h2>
        <div className="items">
          {/* skill */}
          <div className="item">
            <img src="./src/assets/ReactJS.png" alt="" />
            <div className="text">
              <h3>ReactJS</h3>
              <p>
                Công cụ chính để thực hiện các trang web. <br />
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
                Thành thạo trong việc sử dụng. <br />
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
                Luôn áp dụng vào mọi dự án đã và đang thực hiện, cả khi sử dụng
                ReactJS lẫn các trang web cơ bản.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="./src/assets/Javascript.png" alt="" />
            <div className="text">
              <h3>Javascript</h3>
              <p>
                Đủ kiến thức sử dụng để tạo ra những trang web dù không quá
                chuyên sâu. <br />
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
                Áp dụng cho việc sử dụng ReactJS, có hiểu biết về truy xuất dư
                liệu, API, làm việc với backend.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact">
        <h2>Liên hệ</h2>
        <div className="detail">
          <a>
            <i class="ri-phone-fill">
              <span>0523874839</span>
            </i>
          </a>
          <a>
            <i class="ri-mail-line">
              <span>trannguyenhao123@gmail.com</span>
            </i>
          </a>
          <a href="https://github.com/NguyenHaoTran">
            <i class="ri-github-fill">
              <span>https://github.com/NguyenHaoTran</span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
