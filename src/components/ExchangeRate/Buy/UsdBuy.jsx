import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UsdBuy = () => {
  const [wonAmount, setWonAmount] = useState("");
  const [targetRate, setTargetRate] = useState("");
  const exchangeRate = 1385.99 + 10; // 현재 적용 환율, 달러 구매 시 환율 (기준 환율 + 10원)
  const navigate = useNavigate();

  const handleWonChange = (e) => {
    setWonAmount(e.target.value);
  };

  const handleTargetRateChange = (e) => {
    setTargetRate(e.target.value);
  };

  const calculateUsd = () => {
    const won = parseFloat(wonAmount);
    const rate = parseFloat(targetRate) || exchangeRate;

    // Calculate the amount of USD that can be bought with the wonAmount
    const rawUsdAmount = won / rate;

    // Calculate the fee (10원 per $100 due to the 90% discount)
    const fee = (rawUsdAmount * 10) / 100; // 수수료 = (달러) * 10 / 100

    // Final amount of USD after deducting the fee
    const finalUsdAmount = rawUsdAmount - fee;

    return finalUsdAmount.toFixed(2);
  };

  const handleNextClick = () => {
    if (!targetRate) {
      document.getElementById("targetRateInput").focus();
      return;
    }
    if (!wonAmount) {
      document.getElementById("wonAmountInput").focus();
      return;
    }

    const usdAmount = calculateUsd();
    navigate("/usd/buy/confirm", {
      state: { usdAmount, targetRate },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.backArrow} onClick={() => window.history.back()}>
          &lt;
        </span>
        <h2 style={styles.title}>외화 구매</h2>
      </div>
      <h3 style={styles.subtitle}>원화 &gt; 달러 환전</h3>
      <p style={styles.exchangeRate}>
        현재 적용 환율: {exchangeRate}원 &nbsp; <strong>90% 수수료 우대</strong>
      </p>
      <p style={styles.availableAmount}>환전 가능 금액: ₩273.48</p>

      <div style={styles.inputGroup}>
        <label style={styles.label}>목표 환율</label>
        <input
          type="number"
          id="targetRateInput"
          value={targetRate}
          onChange={handleTargetRateChange}
          placeholder="목표 환율"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <input
          type="number"
          id="wonAmountInput"
          value={wonAmount}
          onChange={handleWonChange}
          placeholder="0"
          style={styles.input}
        />
        <img src="/imgs/KRW_Flag.jpg" alt="KRW" style={styles.currencyFlag} />
        <span>원</span>
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.resultLabel}>=</label>
        <input
          type="text"
          value={calculateUsd()}
          readOnly
          placeholder="환전 금액"
          style={styles.input}
        />
        <img src="/imgs/USD_Flag.jpg" alt="USD" style={styles.currencyFlag} />
        <span>달러</span>
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

export default UsdBuy;
