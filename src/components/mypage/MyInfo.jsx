import React from "react";
import { Link } from "react-router-dom";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div className="info-wrapper">
      <div className="info-header">
        <Link to="/mypage" className="back-icon">
          &lt;
        </Link>
        <span>내 정보 관리</span>
      </div>
      <div className="info-content">
        <h2>개인정보</h2>
        <ul>
          <li>이름</li>
          <li>생년월일</li>
          <li>휴대폰 번호</li>
          <li>이메일 주소</li>
        </ul>
        <h2>계좌 관리</h2>
        <ul>
          <li>계좌 등록하기</li>
          <li>
            <Link to="/account/list">등록 계좌 확인</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyInfo;
