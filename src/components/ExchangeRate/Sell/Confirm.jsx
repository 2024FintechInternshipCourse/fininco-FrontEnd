import React from "react";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    // Redirect to a different page or perform another action if needed
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <img src="/imgs/Checkmark.png" alt="Checkmark" style={styles.icon} />
      </div>
      <p style={styles.message}>환전 신청이 완료되었습니다.</p>
      <button style={styles.confirmButton} onClick={handleConfirmClick}>
        확인
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginBottom: "20px",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",

    marginBottom: "70px",
  },
  confirmButton: {
    padding: "13px 70px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#72e4eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Confirm;
