import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Balance.css";

const Balance = () => {
  const [exchangeRates] = useState([
    { country: "KRW", amount: "100,000원", flag: "/imgs/KRW_Flag.jpg" },
    { country: "USD", amount: "$1,000", flag: "/imgs/USD_Flag.jpg" },
    { country: "JPY", amount: "¥100,000", flag: "/imgs/JPY_Flag.png" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleScroll = (e) => {
    const newIndex = Math.round(e.target.scrollLeft / e.target.clientWidth);
    setCurrentIndex(newIndex);
  };

  const handleClick = (country) => {
    switch (country) {
      case "KRW":
        navigate("/krw/detail");
        break;
      case "USD":
        navigate("/usd/detail");
        break;
      case "JPY":
        navigate("/jpy/detail");
        break;
      default:
        break;
    }
  };

  return (
    <div className="balance-container">
      <div className="balance-header">
        <span>잔액</span>
      </div>
      <div className="balance-scroll" onScroll={handleScroll}>
        {exchangeRates.map((rate, index) => (
          <div
            className={`balance ${index === currentIndex ? "active" : ""}`}
            key={index}
            onClick={() => handleClick(rate.country)}
          >
            <img src={rate.flag} alt={`${rate.country} Flag`} />
            <div className="balance-amount">
              <span>{rate.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {exchangeRates.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Balance;
