import React from "react";
import "./projects.scss";
import { useEffect, useRef } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";

const Projects = () => {
  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(`.cards`, { origin: "left", interval: 200 });
    sr.reveal(`h2`, { origin: "right", interval: 200 });
    sr.reveal(`.card`, { origin: "bottom", interval: 200 });
   
  }, []);

  return (
    <div className="projects_container">
      <h2>Các dự án</h2>
      <div className="cards">
          {/* Card */}
          <div className="card" >
            <div className="img">
              <img src="src\assets\Fashion_2.png" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Sử dụng ReactJS + Vite để xây dựng, gần như hoàn thành UI.</p>
              <a href="https://nguyenhaotran.github.io/Fashion_Shop/">Chi tiết</a>
            </div>
          </div>

          <div className="card" >
            <div className="img">
              <img src="src\assets\apple_2.png" />
            </div>
            <div class="content">
              <h3>Apple Web Clone</h3>
              <p>UI trang chủ Apple, HTML-CSS và Javascript cho responsive.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div>

          <div className="card" >
            <div className="img">
              <img src="src\assets\film_2.png" />
            </div>
            <div class="content">
              <h3>Film Lab</h3>
              <p>Sử dụng HTMl_CSS, có Dark mode, responsive với Javascript.</p>
              <a href="https://nguyenhaotran.github.io/LandingPage_Template/">Chi tiết</a>
            </div>
          </div>

          {/* <div className="card">
            <div className="img">
              <img src="src\assets\web_test.jpeg" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div> */}
        </div>
    </div>
  );
};

export default Projects;
