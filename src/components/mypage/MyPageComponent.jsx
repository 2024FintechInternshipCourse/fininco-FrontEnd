import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyPageComponent.css";

const MyPageComponent = () => {
  const [name, setName] = useState("이세림");
  const [email, setEmail] = useState("reems0815@sogang.ac.kr");
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div className="mypage-wrapper">
      <div className="header">
        <h1>마이페이지</h1>
        <img
          src="/imgs/footer_mypage.png"
          alt="Settings"
          className="settings-icon"
        />
      </div>

      <div className="profile">
        <img src="/tree.png" alt="Profile" className="profile-icon" />
        <div className="profile-info">
          <div className="name-edit-container">
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                className="name-input"
              />
            ) : (
              <h2>{name}</h2>
            )}
            {isEditing ? (
              <button onClick={handleSaveClick} className="save-button">
                저장
              </button>
            ) : (
              <button onClick={handleEditClick} className="edit-button">
                수정
              </button>
            )}
          </div>
          <p>{email}</p>
          <div className="profile-stats">
            <span>P🌞</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <ul className="options">
        <li>
          <Link to="/notice">공지사항</Link>
        </li>
        <li>
          <Link to="/info">내 정보 관리</Link>
        </li>
        <li>
          <Link to="/notification">알림 설정</Link>
        </li>
      </ul>
    </div>
  );
};

export default MyPageComponent;
