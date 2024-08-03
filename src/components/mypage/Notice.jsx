import React from "react";
import { Link } from "react-router-dom";
import "./Notice.css";

const notices = [
  { title: "카메라 권한 설정 안내", date: "24.07.20" },
  { title: "이벤트 당첨자 안내", date: "24.07.19" },
  { title: "환율 알림 서비스 오류 접수", date: "24.07.17" },
];

const Notice = () => {
  return (
    <div className="notice-wrapper">
      <div className="notice-header">
        <Link to="/mypage" className="back-icon">
          &lt;
        </Link>
        <span>공지사항</span>
      </div>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={index} className="notice-item">
            <h3>{notice.title}</h3>
            <p>{notice.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;
