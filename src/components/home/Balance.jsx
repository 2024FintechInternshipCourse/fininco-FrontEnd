import React, { useState } from "react";
import "./Balance.css";

const Balance = () => {
  const [exchangeRates] = useState([
    { country: "KRW", amount: "100,000원", flag: "/imgs/KRW_Flag.jpg" },
    { country: "USD", amount: "$1,000", flag: "/imgs/USD_Flag.jpg" },
    { country: "JPY", amount: "¥100,000", flag: "/imgs/JPY_Flag.png" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const newIndex = Math.round(e.target.scrollLeft / e.target.clientWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="balance-container">
      <div className="balance-header">
        <span>잔액</span>
      </div>
      <div className="balance-scroll" onScroll={handleScroll}>
        {exchangeRates.map((rate, index) => (
          <div className="balance" key={index}>
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
