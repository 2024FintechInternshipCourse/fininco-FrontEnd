import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./USD_ExchangeAlert.css";

const USD_ExchangeAlert = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeAlerts, setActiveAlerts] = useState([]);
  const [alertList, setAlertList] = useState([
    "1381.50원",
    "1383.50원",
    "1387.50원",
    "1389.50원",
  ]);
  const [newAlert, setNewAlert] = useState("");

  const handleAddAlertClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSetAlert = (index) => {
    setActiveAlerts((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleAlertInputChange = (e) => {
    setNewAlert(e.target.value);
  };

  const handleSetNewAlert = () => {
    if (newAlert.trim() !== "") {
      setAlertList((prev) => [...prev, `${newAlert.trim()}원`]);
      setNewAlert("");
      setShowModal(false);
    }
  };

  const handleRemoveAlert = (index) => {
    setAlertList((prev) => prev.filter((_, i) => i !== index));
    setActiveAlerts((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="alert-settings-page">
      <div className="header">
        <Link to="/" className="back-button">
          &lt;
        </Link>
        <span>환율 알림 설정</span>
      </div>
      <div className="currency-info">
        <img src="/imgs/USD_Flag.jpg" alt="US Flag" />
        <span>미국 USD</span>
      </div>
      <div className="current-rate">
        <span className="rate-value">1385.50</span>
        <div className="rate-change">
          <span className="change-amount">1.00</span>
          <span className="change-percentage">+0.07%</span>
        </div>
      </div>
      <div className="alert-list">
        {alertList.map((alertValue, index) => (
          <div className="alert-item" key={index}>
            <div className="alert-item-content">
              <span>{alertValue}</span>
              <div className="alert-actions">
                <button
                  className={`set-button ${
                    activeAlerts.includes(index) ? "active" : ""
                  }`}
                  onClick={() => handleSetAlert(index)}
                >
                  {activeAlerts.includes(index) ? "해제" : "설정"}
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveAlert(index)}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
        <button className="add-alert-button" onClick={handleAddAlertClick}>
          + 직접 추가하기
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>환율이 얼마일 때 안내해드릴까요?</p>
            <input
              type="text"
              className="alert-input"
              value={newAlert}
              onChange={handleAlertInputChange}
              placeholder="원"
            />
            <button
              className="modal-button"
              onClick={handleSetNewAlert}
              disabled={newAlert.trim() === ""}
            >
              알림 설정
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default USD_ExchangeAlert;
