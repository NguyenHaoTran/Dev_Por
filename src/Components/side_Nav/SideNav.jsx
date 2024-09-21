import { useState } from "react";
import "./sideNav.scss";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  // Hàm để đóng sidebar khi chọn menu
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSideNav}>
        <span>
          <i className="ri-menu-2-line"></i>
        </span>
      </button>
      <nav className={`side-nav ${isOpen ? "open" : ""}`}>
        <div className="name">
          <div className="avt">
            <img src="src/assets/AVT.jpg" alt="" />
          </div>
          <h1>ng.hao.t</h1>
        </div>
        <div className="line"></div>
        <ul>
          <li onClick={handleMenuClick}>
            <i className="ri-home-line"></i>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleMenuClick}>
            <i className="ri-profile-line"></i>
            <Link to="/about">Về tôi</Link>
          </li>
          <li onClick={handleMenuClick}>
            <i className="ri-stack-line"></i>
            <Link to="/skills">Kỹ năng</Link>
          </li>
          <li onClick={handleMenuClick}>
            <i className="ri-code-line"></i>
            <Link to="/projects">Các dự án</Link>
          </li>
          <li onClick={handleMenuClick}>
            <i className="ri-building-4-fill"></i>
            <Link to="/contact">K.Nghiệm</Link>
          </li>
        </ul>
        <div className="line"></div>
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100004978517081">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/ng.hao.t/?fbclid=IwY2xjawFWjpVleHRuA2FlbQIxMAABHTTWJkf5XziAIpi7WI_szWKaBTgqJPMZNCaRVW4TLBlPtbbydJke-DisYw_aem_ZNAD-vCGjGHxYT6F5XSoeg">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://github.com/NguyenHaoTran">
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
