import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./USD_ExchangeRate.css";

const USD_ExchangeRate = () => {
  const navigate = useNavigate();

  const handleSellClick = () => {
    navigate("/usd/sell");
  };

  const handleBuyClick = () => {
    navigate("/usd/buy");
  };

  return (
    <div className="exchange-rate">
      <div className="header">
        <Link to="/" className="back-button">
          &lt;
        </Link>
        <span>실시간 환율</span>
      </div>
      <div className="exchange-info">
        <div className="currency">
          <img src="/imgs/USD_Flag.jpg" alt="US Flag" />
          <span>미국 USD</span>
        </div>
        <div className="rate">
          <span className="value">1385.50</span>
          <div className="change">
            <span className="amount">1.00</span>
            <span className="percentage">+0.07%</span>
            <div className="icons-container">
              <Link to="/usd/exchangerate/alert" className="bell-link">
                <img src="/imgs/bell.png" alt="bell" className="bell-icon" />
              </Link>
              <img
                src="/imgs/question.png"
                alt="question"
                className="question-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="exchange-actions">
        <div className="sell">
          <span>달러 판매 시</span>
          <span>1,380.4원</span>
        </div>
        <div className="buy">
          <span>달러 구매 시</span>
          <span>1,394.24원</span>
        </div>
      </div>
      <div className="buttons">
        <button className="sell-button" onClick={handleSellClick}>
          외화 판매
        </button>
        <button className="buy-button" onClick={handleBuyClick}>
          외화 구매
        </button>
      </div>
      <div className="history">
        <span>환전 내역</span>
        <div className="history-item">
          <div className="date">7.26</div>
          <div className="details">
            <div>원화 &gt; 달러</div>
            <div>15:15 환전달러입금</div>
          </div>
          <div className="amount">$60.00</div>
          <div className="krw">$273.48</div>
        </div>
        <div className="history-item">
          <div className="date">7.26</div>
          <div className="details">
            <div>원화 &gt; 달러</div>
            <div>13:04 환전달러입금</div>
          </div>
          <div className="amount">$34.00</div>
          <div className="krw">$213.48</div>
        </div>
        <div className="history-item">
          <div className="date">7.24</div>
          <div className="details">
            <div>달러 &gt; 원화</div>
            <div>13:04 환전달러입금</div>
          </div>
          <div className="amount">-$80.00</div>
          <div className="krw">$179.48</div>
        </div>
      </div>
    </div>
  );
};

export default USD_ExchangeRate;
