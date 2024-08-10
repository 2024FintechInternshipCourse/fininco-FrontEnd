import React from "react";
import "./StepTwo.css";

const StepTwo = () => {
  return (
    <div className="step-two-container">
      <img src="/imgs/logo2.png" alt="Logo" className="logo" />
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=f085cf45c0ed4952c548225913ac2f89&redirect_uri=https://yourdomain.com/kakao/callback&response_type=code&scope=profile_nickname">
        <img
          src="/imgs/kakao_login.png"
          alt="Kakao Login"
          className="kakao-login"
        />
      </a>
    </div>
  );
};

export default StepTwo;
