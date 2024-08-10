import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./KrwDetail.css";

const transactionsData = [
  {
    date: "2024.08.08",
    flagSrc: "/imgs/KRW_Flag.jpg",
    flagAlt: "KRW Flag",
    type: "JPY → KRW",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
  {
    date: "2024.08.06",
    flagSrc: "/imgs/KRW_Flag.jpg",
    flagAlt: "KRW Flag",
    type: "JPY → KRW",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
  {
    date: "2024.07.24",
    flagSrc: "/imgs/KRW_Flag.jpg",
    flagAlt: "KRW Flag",
    type: "USD → KRW",
    rate: "적용 환율: 1394.24원",
    time: "12:30",
    amount: "100,852 원",
    total: "1,189,852 원",
  },
  {
    date: "2024.06.24",
    flagSrc: "/imgs/KRW_Flag.jpg",
    flagAlt: "KRW Flag",
    type: "USD → KRW",
    rate: "적용 환율: 1384.24원",
    time: "12:30",
    amount: "100,852 원",
    total: "1,189,852 원",
  },
  {
    date: "2024.05.24",
    flagSrc: "/imgs/KRW_Flag.jpg",
    flagAlt: "KRW Flag",
    type: "JPY → KRW",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
  {
    date: "2024.01.23",
    flagSrc: "/imgs/KRW_Flag.jpg",
    flagAlt: "KRW Flag",
    type: "JPY → KRW",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
];

const getFilteredTransactions = (period) => {
  const now = new Date();
  let startDate;

  switch (period) {
    case "1주일":
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case "1개월":
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case "3개월":
      startDate = new Date(now.setMonth(now.getMonth() - 3));
      break;
    case "6개월":
      startDate = new Date(now.setMonth(now.getMonth() - 6));
      break;
    default:
      return transactionsData;
  }

  return transactionsData.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= startDate;
  });
};

const KrwDetail = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("전체");
  const filteredTransactions = getFilteredTransactions(selectedPeriod);

  const [isUSD, setIsUSD] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsUSD((prevIsUSD) => !prevIsUSD);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currencyInfo = isUSD
    ? {
        flagSrc: "/imgs/USD_Flag.jpg",
        currencyName: "미국 USD",
        currencyRate: "1385.50",
        changeValue: "▲ 1.00",
        changePercent: "+0.07%",
      }
    : {
        flagSrc: "/imgs/JPY_Flag.png",
        currencyName: "일본 JPY",
        currencyRate: "929.22",
        changeValue: "▲ 0.50",
        changePercent: "+0.05%",
      };

  return (
    <div className="krw-detail">
      <header className="krw-header">
        <Link to="/" className="back-arrow">
          ←
        </Link>
        <h1>원화</h1>
      </header>

      <div className="currency-info">
        <img
          src={currencyInfo.flagSrc}
          alt={`${currencyInfo.currencyName} Flag`}
          className="currency-flag"
        />
        <div className="currency-name">{currencyInfo.currencyName}</div>
        <div className="currency-rate">{currencyInfo.currencyRate}</div>
        <div className="currency-change">
          <div className="change-value">{currencyInfo.changeValue}</div>
          <div className="change-percent">{currencyInfo.changePercent}</div>
        </div>
      </div>

      <div className="balance-info">
        <div className="balance-label">잔액</div>
        <div className="balance-value">1,189,852원</div>
      </div>
      <div className="buttons">
        <button className="transfer-button">내 계좌로 보내기</button>
        <button className="recharge-button">잔액 충전하기</button>
      </div>
      <div className="time-periods">
        {["전체", "1주일", "1개월", "3개월", "6개월"].map((period) => (
          <span
            key={period}
            className={selectedPeriod === period ? "selected" : ""}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </span>
        ))}
      </div>
      <div className="transactions">
        {filteredTransactions.map((transaction, index) => (
          <div key={index}>
            <div className="transaction-date">{transaction.date}</div>
            <div className="transaction-item">
              <img
                src={transaction.flagSrc}
                alt={transaction.flagAlt}
                className="transaction-flag"
              />
              <div className="transaction-info">
                <div className="transaction-type">{transaction.type}</div>
                <div className="transaction-rate">{transaction.rate}</div>
                <div className="transaction-time">{transaction.time}</div>
              </div>
              <div className="transaction-amount">{transaction.amount}</div>
              <div className="transaction-total">{transaction.total}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KrwDetail;
