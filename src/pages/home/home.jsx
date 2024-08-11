import React from "react";
import Balance from "../../components/home/Balance";
import ExchangeRateCard from "../../components/home/ExchangeRateCard";
import RecentTransaction from "../../components/home/RecentTransaction";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const handleUsdClick = () => {
    window.location.href = "/usd/exchange/rate";
  };
  const handleJpyClick = () => {
    window.location.href = "/jpy/exchange/rate";
  };

  return (
    <div className="home">
      <div className="header">
        <div className="header-right">
          <div className="notifications">
            <img
              src="/imgs/notice_icon.png"
              alt="Notifications"
              className="icon"
            />
          </div>
          <div className="menu">
            <Link to="/category">
              <img src="/imgs/category_icon.png" alt="Menu" className="icon" />
            </Link>
          </div>
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
            changePercent="  0.07%"
            flag="/imgs/USD_Flag.jpg"
            onClick={handleUsdClick}
          />
          <ExchangeRateCard
            currency="JPY"
            rate="9.01"
            change="0.32"
            changePercent="-1.37%"
            flag="/imgs/JPY_Flag.png"
            onClick={handleJpyClick}
          />
          <ExchangeRateCard
            rate="환전 내역 바로가기"
            flag="/imgs/shortcut.png"
            onClick={() => (window.location.href = "/exchange/history")}
          />
        </div>
      </div>
      <RecentTransaction />
    </div>
  );
};

export default Home;
