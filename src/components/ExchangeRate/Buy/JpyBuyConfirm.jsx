import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JpyBuyConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jpyAmount, targetRate, wonAmount } = location.state;

  const handleBackClick = () => {
    window.history.back();
  };

  const handleConfirmClick = () => {
    navigate("/confirm");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.backArrow} onClick={handleBackClick}>
          &larr;
        </span>
        <h2 style={styles.title}>외화 구매</h2>
      </div>
      <h3 style={styles.subtitle}>원화 &gt; 엔화 환전</h3>
      <p style={styles.confirmText}>
        목표 환율 <span style={styles.highlight}>{targetRate}</span>원에서
        <br />
        <span style={styles.highlight}>{wonAmount}원</span>을{" "}
        <span style={styles.highlight}>{jpyAmount} ¥</span>으로
        <br />
        바꾸시겠습니까?
      </p>
      <p style={styles.exchangeRate}>
        적용 환율 <span style={styles.highlight}>{targetRate}원</span> (90%
        우대)
      </p>
      <p style={styles.note}>
        ※환율이 목표에 도달하지 못할 시 예약이 취소될 수 있습니다.
      </p>

      <div style={styles.buttonGroup}>
        <button style={styles.cancelButton} onClick={handleBackClick}>
          닫기
        </button>
        <button style={styles.confirmButton} onClick={handleConfirmClick}>
          확인
        </button>
      </div>
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
  confirmText: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#000",
    fontWeight: "bold",
    lineHeight: "1.6", // 줄 간격 추가
  },
  highlight: {
    color: "#72e4eb",
  },
  exchangeRate: {
    fontSize: "16px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  note: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "30px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  cancelButton: {
    width: "48%",
    padding: "15px",
    fontSize: "15px",
    backgroundColor: "#E1E1E1",
    color: "#333",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
  confirmButton: {
    width: "48%",
    padding: "15px",
    fontSize: "15px",
    backgroundColor: "#72e4eb",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default JpyBuyConfirm;
