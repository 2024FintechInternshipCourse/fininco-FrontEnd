import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExchangeHistory.css";

const ExchangeHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="exchange-history">
      <div className="header">
        <h2 className="title" onClick={() => navigate("/")}>
          &lt;{" "}
        </h2>
        <h2 className="title">환전 신청 내역</h2>
      </div>

      <div className="pending-section">
        <h3 className="section-title">대기 중</h3>
        <div
          className="pending-transaction-card"
          onClick={() => navigate("/usd/exchange/rate")}
        >
          <img src="/imgs/USD_Flag.jpg" alt="USD Flag" className="flag" />
          <div className="details">
            <span className="transaction-type">원화로 환전</span>
            <span className="amount">$100 판매</span>
            <span className="target-rate">목표 환율 1368.42원</span>
          </div>
        </div>

        <div
          className="pending-transaction-card"
          onClick={() => navigate("/jpy/exchange/rate")}
        >
          <img src="/imgs/JPY_Flag.png" alt="JPY Flag" className="flag" />
          <div className="details">
            <span className="transaction-type">엔화로 환전</span>
            <span className="amount">1,800¥ 구매</span>
            <span className="target-rate">목표 환율 920.66원</span>
          </div>
        </div>
      </div>

      <div className="recent-section">
        <h3 className="section-title">최근 환전 내역</h3>
        <ul className="transaction-list">
          <li className="transaction-item">
            <span className="date">8.2</span>
            <span className="type">원화 &gt; 달러</span>
            <span className="amount">$60.00</span>
            <span className="status success">환전 성공</span>
          </li>
          <li className="transaction-item">
            <span className="date">8.1</span>
            <span className="type">원화 &gt; 엔화</span>
            <span className="amount">1,200¥</span>
            <span className="status failed">환전 실패</span>
          </li>
          <li className="transaction-item">
            <span className="date">7.29</span>
            <span className="type">달러 &gt; 원화</span>
            <span className="amount">120,000원</span>
            <span className="status cancelled">환전 취소</span>
          </li>
          <li className="transaction-item">
            <span className="date">7.29</span>
            <span className="type">달러 &gt; 원화</span>
            <span className="amount">100,000원</span>
            <span className="status cancelled">환전 취소</span>
          </li>
          <li className="transaction-item">
            <span className="date">7.28</span>
            <span className="type">원화 &gt; 엔화</span>
            <span className="amount">1,100¥</span>
            <span className="status failed">환전 실패</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExchangeHistory;
