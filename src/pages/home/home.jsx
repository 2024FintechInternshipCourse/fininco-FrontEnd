import React from "react";
import Balance from "../../components/home/Balance";
import ExchangeRateCard from "../../components/home/ExchangeRateCard";
import RecentTransaction from "../../components/home/RecentTransaction";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="notifications">
          <i className="bell-icon">🔔</i>
        </div>
        <div className="menu">
          <i className="menu-icon">☰</i>
        </div>
      </div>
      <Balance />
      <div className="exchange-rate-section">
        <h2>실시간 환율</h2>
        <div className="exchange-rate-cards">
          <ExchangeRateCard
            currency="USD"
            rate="1,384.87"
            change="1.00"
            changePercent="0.07"
            flag="/imgs/USD_Flag.jpg"
          />
          <ExchangeRateCard
            currency="JPY"
            rate="9.01"
            change="0.32"
            changePercent="-1.37"
            flag="/imgs/JPY_Flag.png"
          />
        </div>
      </div>
      <RecentTransaction />
    </div>
  );
};

export default Home;
