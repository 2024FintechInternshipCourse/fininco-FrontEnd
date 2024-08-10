import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/color.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="footer-item">
        <img src="/imgs/footer_home.png" alt="Home Icon" />
        <span>홈</span>
      </Link>
      <Link to="/purchase" className="footer-item">
        <img src="/imgs/footer_qr.png" alt="List Icon" />
        <span>결제하기</span>
      </Link>
      <Link to="/mypage" className="footer-item">
        <img src="/imgs/footer_mypage.png" alt="Storage Icon" />
        <span>마이페이지</span>
      </Link>
    </footer>
  );
};

export default Footer;
