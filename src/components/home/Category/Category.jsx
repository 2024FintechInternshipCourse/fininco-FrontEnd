import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const styles = {
    menu: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    },
    menuHeader: {
      fontSize: "24px",
    },
    menuHeaderLink: {
      textDecoration: "none",
      color: "inherit",
    },
    menuList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
      flexGrow: 1,
    },
    menuItem: {
      fontSize: "20px",

      margin: "20px 0px",
    },
    menuFooter: {
      fontSize: "12px",
      textAlign: "left",
    },
    menuFooterP: {
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.menu}>
      <div style={styles.menuHeader}>
        <Link to="/" style={styles.menuHeaderLink}>
          ←
        </Link>
      </div>
      <ul style={styles.menuList}>
        <li style={styles.menuItem}>환율 알림 설정</li>
        <li style={styles.menuItem}>결제</li>
        <li style={styles.menuItem}>잔액</li>
        <li style={styles.menuItem}>실시간 환율</li>
        <li style={styles.menuItem}>거래내역</li>
        <Link to="/mypage" style={styles.menuItem}>
          마이페이지
        </Link>
      </ul>
      <footer style={styles.menuFooter}>
        <p style={styles.menuFooterP}>3조 (핀테크, 핀테크 센터)</p>
        <p style={styles.menuFooterP}>
          Copyright©2024.3조. All rights reserved.
        </p>
        <p style={styles.menuFooterP}>Republished 2024.</p>
        <p style={styles.menuFooterP}>contact : fintech@fintech.com</p>
      </footer>
    </div>
  );
};

export default Category;
