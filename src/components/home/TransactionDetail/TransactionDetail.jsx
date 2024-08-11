import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TransactionDetail.css";

const data = [
  { name: "쇼핑", value: 400 },
  { name: "음식", value: 300 },
  { name: "교통", value: 300 },
];

const COLORS = ["#BCECF2", "#D0FFD2", "#FFD0D0"];

const transactions = [
  {
    date: new Date("2024-07-24T12:30:00"),
    amount: 100000,
    description: "핀테크센터",
    balance: 340000,
    icon: "/imgs/Item1.png",
  },
  {
    date: new Date("2024-07-24T12:39:00"),
    amount: -20000,
    description: "택시",
    balance: 320000,
    icon: "/imgs/Car.png",
  },
  {
    date: new Date("2024-06-15T09:00:00"),
    amount: -50000,
    description: "식사",
    balance: 270000,
    icon: "/imgs/Item1.png",
  },
  {
    date: new Date("2024-05-10T14:20:00"),
    amount: -30000,
    description: "쇼핑",
    balance: 240000,
    icon: "/imgs/Item1.png",
  },
  {
    date: new Date("2024-04-05T18:00:00"),
    amount: -40000,
    description: "대중교통",
    balance: 200000,
    icon: "/imgs/Item1.png",
  },
  {
    date: new Date("2024-03-20T10:30:00"),
    amount: -100000,
    description: "호텔",
    balance: 100000,
    icon: "/imgs/Item1.png",
  },
];

const renderCustomLegend = () => {
  return (
    <div className="custom-legend">
      {data.map((entry, index) => (
        <div key={`item-${index}`} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          ></span>
          <span className="legend-text">{entry.name}</span>
        </div>
      ))}
    </div>
  );
};

const TransactionDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const handleDirectSettingClick = () => {
    setIsModalOpen(true);
  };

  const [activeFilter, setActiveFilter] = useState("전체");

  const handleFilterTransactions = (period) => {
    setActiveFilter(period); // Update active filter state
    const now = new Date();
    let filtered;

    switch (period) {
      case "1개월":
        filtered = transactions.filter(
          (transaction) =>
            transaction.date >=
            new Date(new Date().setMonth(now.getMonth() - 1))
        );
        break;
      case "3개월":
        filtered = transactions.filter(
          (transaction) =>
            transaction.date >=
            new Date(new Date().setMonth(now.getMonth() - 3))
        );
        break;
      case "6개월":
        filtered = transactions.filter(
          (transaction) =>
            transaction.date >=
            new Date(new Date().setMonth(now.getMonth() - 6))
        );
        break;
      case "전체":
        filtered = transactions;
        break;
      default:
        filtered = transactions.filter(
          (transaction) =>
            transaction.date >= startDate && transaction.date <= endDate
        );
        break;
    }

    setFilteredTransactions(filtered);
    if (period !== "직접 설정") {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="transaction-detail">
      <header className="tabs">
        <Link to="/">←</Link>
        <h1>거래 내역</h1>
      </header>
      <main>
        <div className="tabs">
          <Link to="/transaction/detail" className="underline">
            최근 여행 사용 내역
          </Link>
          <Link to="/spending/report">소비리포트</Link>
        </div>
        <div className="date-range">
          <span>24. 07. 22 ~ 24. 07. 26</span>
        </div>
        <div className="category-chart">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend content={renderCustomLegend} />
          </PieChart>
        </div>
        <div className="total-amount">총 사용 금액 100,000 ¥</div>
        <div className="transaction-history">
          <div className="transaction-history-header">
            <span
              onClick={() => handleFilterTransactions("전체")}
              style={{
                fontWeight: activeFilter === "전체" ? "bold" : "normal",
              }}
            >
              전체
            </span>
            <span
              onClick={() => handleFilterTransactions("1개월")}
              style={{
                fontWeight: activeFilter === "1개월" ? "bold" : "normal",
              }}
            >
              1개월
            </span>
            <span
              onClick={() => handleFilterTransactions("3개월")}
              style={{
                fontWeight: activeFilter === "3개월" ? "bold" : "normal",
              }}
            >
              3개월
            </span>
            <span
              onClick={() => handleFilterTransactions("6개월")}
              style={{
                fontWeight: activeFilter === "6개월" ? "bold" : "normal",
              }}
            >
              6개월
            </span>
            <span
              onClick={handleDirectSettingClick}
              style={{
                fontWeight: activeFilter === "직접 설정" ? "bold" : "normal",
              }}
              className="direct-setting"
            >
              직접 설정
            </span>
          </div>
          {filteredTransactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <img src={transaction.icon} alt="Item Icon" />
              <div className="transaction-details">
                <span>{transaction.amount.toLocaleString()} ¥</span>
                <span>{transaction.description}</span>
                <span>
                  {transaction.date.toLocaleDateString([], {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}{" "}
                  {transaction.date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="transaction-balance">
                {transaction.balance.toLocaleString()} ¥
              </div>
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>기간 설정</h2>
            <div className="date-picker">
              <span>시작일:</span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
              />
            </div>
            <div className="date-picker">
              <span>종료일:</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="yyyy/MM/dd"
              />
            </div>
            <div className="button-container">
              <div className="button" onClick={() => setIsModalOpen(false)}>
                닫기
              </div>
              <div
                className="button-confirm"
                onClick={() => handleFilterTransactions("직접 설정")}
              >
                확인
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;
