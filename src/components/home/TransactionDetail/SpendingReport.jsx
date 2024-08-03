import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SpendingReport.css";

const previousData = [
  { name: "쇼핑", value: 4000 },
  { name: "음식", value: 3000 },
  { name: "교통", value: 2000 },
  { name: "기타", value: 1000 },
];

const currentData = [
  { name: "쇼핑", value: 5000 },
  { name: "음식", value: 4000 },
  { name: "교통", value: 3000 },
  { name: "기타", value: 2000 },
];

const COLORS = ["#BCECF2", "#D0FFD2", "#FFD0D0", "#FFC0CB"];

const renderCustomLegend = () => {
  return (
    <div className="custom-legend">
      {previousData.map((entry, index) => (
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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`지난 여행 : ${payload[0].payload.previous}`}</p>
        <p>{`최근 여행 : ${payload[0].payload.current}`}</p>
      </div>
    );
  }

  return null;
};

const SpendingReport = () => {
  const navigate = useNavigate();

  const detailedData = [
    {
      name: "쇼핑",
      previous: previousData.find((d) => d.name === "쇼핑").value,
      current: currentData.find((d) => d.name === "쇼핑").value,
    },
    {
      name: "음식",
      previous: previousData.find((d) => d.name === "음식").value,
      current: currentData.find((d) => d.name === "음식").value,
    },
    {
      name: "교통",
      previous: previousData.find((d) => d.name === "교통").value,
      current: currentData.find((d) => d.name === "교통").value,
    },
    {
      name: "기타",
      previous: previousData.find((d) => d.name === "기타").value,
      current: currentData.find((d) => d.name === "기타").value,
    },
  ];

  return (
    <div className="spending-report">
      <header className="tabs">
        <Link to="/">←</Link>
        <h1>거래 내역</h1>
      </header>
      <main>
        <div className="tabs">
          <Link to="/transaction/detail">최근 여행 사용 내역</Link>
          <Link to="/spending/report" className="underline">
            소비리포트
          </Link>
        </div>
        <div className="date-range">
          <span>24. 07. 22 ~ 24. 07. 26</span>
        </div>
        <div className="comparison-title">지난 여행과의 비교</div>
        <div className="comparison-charts">
          <div className="chart-container">
            <div className="chart-title">지난 여행</div>
            <PieChart width={160} height={160}>
              <Pie
                data={previousData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {previousData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="chart-container">
            <div className="chart-title">이번 여행</div>
            <PieChart width={160} height={160}>
              <Pie
                data={currentData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {currentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="category-legend">
          <h3>카테고리</h3>
          {renderCustomLegend()}
        </div>
        <div className="detailed-spending">
          <h2>소비항목 세부사항</h2>
          <div className="bar-charts">
            {detailedData.map((item, index) => (
              <div key={index} className="bar-chart-container">
                <h3>{item.name}</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={[item]}>
                    <XAxis dataKey="" hide={true} />
                    <YAxis />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "transparent" }}
                    />
                    <Bar dataKey="previous" fill="#BCECF2" name="지난 여행" />
                    <Bar dataKey="current" fill="#FFD0D0" name="최근 여행" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </div>
        <div className="total-amount">지난 여행 경비: 80,000 ¥</div>
        <div className="total-amount">이번 여행 경비: 100,000 ¥</div>
        <div className="difference">
          지난 여행보다 20,000 ¥ 더 지출했습니다.
        </div>
      </main>
    </div>
  );
};

export default SpendingReport;
