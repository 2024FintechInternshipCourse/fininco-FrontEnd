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

  const handleFilterTransactions = () => {
    setFilteredTransactions(
      transactions.filter(
        (transaction) =>
          transaction.date >= startDate && transaction.date <= endDate
      )
    );
    setIsModalOpen(false);
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
            <span>기간</span>
            <span>1개월</span>
            <span>3개월</span>
            <span>6개월</span>
            <span onClick={handleDirectSettingClick} className="direct-setting">
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
                onClick={handleFilterTransactions}
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
