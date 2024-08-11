import React from "react";
import { Link } from "react-router-dom";
import "./JPY_ExchangeRate.css";
import { useNavigate } from "react-router-dom";

const JPY_ExchangeRate = () => {
  const navigate = useNavigate();

  const handleSellClick = () => {
    navigate("/jpy/sell");
  };
  const handleBuyClick = () => {
    navigate("/jpy/buy");
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
          <img src="/imgs/JPY_Flag.png" alt="JPY Flag" />
          <span>일본 JPY</span>
        </div>
        <div className="rate">
          <span className="value">9.36</span>
          <div className="change">
            <span className="amount">0.32</span>
            <span className="percentage">-1.37%</span>
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
          <span>엔화 판매 시</span>
          <span>9.00원</span>
        </div>
        <div className="buy">
          <span>엔화 구매 시</span>
          <span>9.02원</span>
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
            <div>원화 &gt; 엔화</div>
            <div>15:15 환전엔화입금</div>
          </div>
          <div className="amount">¥60.00</div>
          <div className="krw">540.60원</div>
        </div>
        <div className="history-item">
          <div className="date">7.26</div>
          <div className="details">
            <div>원화 &gt; 엔화</div>
            <div>13:04 환전엔화입금</div>
          </div>
          <div className="amount">¥34.00</div>
          <div className="krw">306.34원</div>
        </div>
        <div className="history-item">
          <div className="date">7.24</div>
          <div className="details">
            <div>엔화 &gt; 원화</div>
            <div>13:04 환전엔화출금</div>
          </div>
          <div className="amount">-¥80.00</div>
          <div className="krw">720.80원</div>
        </div>
      </div>
    </div>
  );
};

export default JPY_ExchangeRate;
