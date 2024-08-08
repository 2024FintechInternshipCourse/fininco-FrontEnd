import React from "react";
import { Link } from "react-router-dom";
import "./UsdDetail.css";
import { useState } from "react";

const transactionsData = [
  {
    date: "2024.08.08",
    flagSrc: "/imgs/USD_Flag.jpg",
    flagAlt: "USD Flag",
    type: "JPY → USD",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
  {
    date: "2024.08.06",
    flagSrc: "/imgs/USD_Flag.jpg",
    flagAlt: "USD Flag",
    type: "JPY → USD",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
  {
    date: "2024.07.24",
    flagSrc: "/imgs/USD_Flag.jpg",
    flagAlt: "USD Flag",
    type: "KRW → USD",
    rate: "적용 환율: 1394.24원",
    time: "12:30",
    amount: "100,852 원",
    total: "1,189,852 원",
  },
  {
    date: "2024.06.24",
    flagSrc: "/imgs/USD_Flag.jpg",
    flagAlt: "USD Flag",
    type: "KRW → USD",
    rate: "적용 환율: 1384.24원",
    time: "12:30",
    amount: "100,852 원",
    total: "1,189,852 원",
  },
  {
    date: "2024.05.24",
    flagSrc: "/imgs/USD_Flag.jpg",
    flagAlt: "USD Flag",
    type: "KRW → USD",
    rate: "적용 환율: 929.22원",
    time: "12:30",
    amount: "500,000 원",
    total: "500,000 원",
  },
  {
    date: "2024.01.23",
    flagSrc: "/imgs/USD_Flag.jpg",
    flagAlt: "USD Flag",
    type: "JPY → USD",
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

const UsdDetail = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("전체");
  const filteredTransactions = getFilteredTransactions(selectedPeriod);

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
          src="/imgs/USD_Flag.jpg"
          alt="USD Flag"
          className="currency-flag"
        />
        <div className="currency-name">미국 USD</div>
        <div className="currency-rate">1385.50</div>
        <div className="currency-change">
          <div className="change-value">▲ 1.00</div>
          <div className="change-percent">+0.07%</div>
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

export default UsdDetail;
