import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyPageComponent.css";

const MyPageComponent = () => {
  return (
    <div className="mypage-wrapper">
      <div className="header">
        <img src="/imgs/footer_mypage.png" alt="Back" className="back-icon" />
        <h1>마이페이지</h1>
      </div>

      <ul className="options">
        <Link to="/notice">
          <li>공지사항</li>
        </Link>

        <Link to="/info">
          <li>내 정보 관리</li>
        </Link>

        <Link to="/notification">
          <li>알림 설정</li>
        </Link>
      </ul>

      <div className="spacer"></div>

      <div className="footer-links">
        <Link to="/terms">약관 확인</Link>
        <Link to="/unsubscribe">탈퇴하기</Link>
      </div>
    </div>
  );
};

export default MyPageComponent;
