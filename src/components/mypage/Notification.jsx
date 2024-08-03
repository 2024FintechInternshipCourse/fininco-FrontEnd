import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Notification.css";

const Notification = () => {
  const [settings, setSettings] = useState({
    all: true,
    exchangeRate: false,
    notice: false,
  });

  const toggleSetting = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="notification-settings-wrapper">
      <div className="notification-settings-header">
        <Link to="/mypage" className="back-icon">
          &lt;
        </Link>
        <span>알림 설정</span>
      </div>
      <ul className="notification-settings-list">
        <li className="notification-settings-item">
          <span>전체 알림음</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.all}
              onChange={() => toggleSetting("all")}
            />
            <span className="slider"></span>
          </label>
        </li>
        <li className="notification-settings-item">
          <span>환율 정보 알림</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.exchangeRate}
              onChange={() => toggleSetting("exchangeRate")}
            />
            <span className="slider"></span>
          </label>
        </li>
        <li className="notification-settings-item">
          <span>공지사항 알림</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.notice}
              onChange={() => toggleSetting("notice")}
            />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Notification;
