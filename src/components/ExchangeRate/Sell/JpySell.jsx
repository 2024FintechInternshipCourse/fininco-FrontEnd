import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JpySell = () => {
  const [jpyAmount, setJpyAmount] = useState("");
  const [targetRate, setTargetRate] = useState("");
  const exchangeRate = 9.01; // 현재 적용 환율 (JPY to KRW)
  const navigate = useNavigate();

  const handleJpyChange = (e) => {
    setJpyAmount(e.target.value);
  };

  const handleTargetRateChange = (e) => {
    setTargetRate(e.target.value);
  };

  const calculateWon = () => {
    const jpy = parseFloat(jpyAmount);
    const rate = parseFloat(targetRate) || exchangeRate;

    // Calculate with 90% fee discount
    const fee = 16; // Example fee in KRW per 100 JPY
    const discountedFee = fee * 0.1; // 90% discount means you only pay 10% of the fee
    const finalAmount = jpy * rate - (jpy / 100) * discountedFee;

    return finalAmount.toFixed(2);
  };

  const handleNextClick = () => {
    navigate("/jpy/sell/confirm", {
      state: { jpyAmount, targetRate }, // Correct state being passed
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.backArrow} onClick={() => window.history.back()}>
          &larr;
        </span>
        <h2 style={styles.title}>외화 판매</h2>
      </div>
      <h3 style={styles.subtitle}>엔화 &gt; 원화 환전</h3>
      <p style={styles.exchangeRate}>
        현재 적용 환율: {exchangeRate}원 &nbsp; <strong>90% 수수료 우대</strong>
      </p>
      <p style={styles.availableAmount}>환전 가능 금액: ¥100,000</p>

      <div style={styles.inputGroup}>
        <label style={styles.label}>목표 환율</label>
        <input
          type="number"
          value={targetRate}
          onChange={handleTargetRateChange}
          placeholder="목표 환율"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <input
          type="number"
          value={jpyAmount}
          onChange={handleJpyChange}
          placeholder="0"
          style={styles.input}
        />
        <img src="/imgs/JPY_Flag.png" alt="JPY" style={styles.currencyFlag} />
        <span>엔</span>
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.resultLabel}>=</label>
        <input
          type="text"
          value={calculateWon()}
          readOnly
          placeholder="환전 금액"
          style={styles.input}
        />
        <img src="/imgs/KRW_Flag.jpg" alt="KRW" style={styles.currencyFlag} />
        <span>원</span>
      </div>

      <button style={styles.nextButton} onClick={handleNextClick}>
        다음
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  backArrow: {
    fontSize: "24px",
    cursor: "pointer",
    marginRight: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "5px",
  },
  subtitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    marginTop: "30px",
    color: "#000",
  },
  exchangeRate: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "5px 3px",
    color: "#333",
    marginBottom: "20px",
  },
  availableAmount: {
    color: "#72e4eb",
    fontSize: "16px",
    margin: "15px 3px",
    marginBottom: "35px",
    fontWeight: "bold",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  label: {
    fontSize: "18px",
    marginRight: "10px",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "right",
  },
  currencyFlag: {
    width: "30px",
    height: "30px",
    margin: "0 10px",
  },
  resultLabel: {
    fontSize: "20px",
    marginRight: "10px",
  },
  nextButton: {
    width: "100%",
    padding: "15px",
    fontSize: "20px",
    backgroundColor: "#72e4eb",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default JpySell;
