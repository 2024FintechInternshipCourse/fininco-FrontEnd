import React from "react";
import "./ExchangeRateCard.css";

const ExchangeRateCard = ({
  currency,
  rate,
  change,
  changePercent,
  flag,
  onClick,
}) => {
  return (
    <div className="exchange-rate-card" onClick={onClick}>
      <div className="currency">
        <img src={flag} alt={`${currency} Flag`} />
        <span>{currency}</span>
      </div>
      <div className="rate">{rate}</div>
      <div className={`change ${change > 0 ? "up" : "down"}`}>
        <span>{change}</span>
        <span>{changePercent}%</span>
      </div>
    </div>
  );
};

export default ExchangeRateCard;
