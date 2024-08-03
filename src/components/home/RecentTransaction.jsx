import React from "react";
import { Link } from "react-router-dom";
import "./RecentTransaction.css";

const RecentTransaction = () => {
  return (
    <div className="recent-transaction">
      <div className="transaction-header">
        <span>최근 거래 내역</span>
        <Link to="/transaction/detail">더보기</Link>
      </div>
      <div className="transaction-item">
        <img src="/imgs/Car.png" alt="Car Icon" />
        <div className="transaction-details">
          <span>100,000 Point</span>
          <span>핀테크센터</span>
        </div>
        <div className="transaction-date">2024.07.12</div>
      </div>
    </div>
  );
};

export default RecentTransaction;
