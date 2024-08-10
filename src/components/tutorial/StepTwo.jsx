import React, { useEffect } from "react";
import "./StepTwo.css";

const StepTwo = () => {
  const clientId = "f085cf45c0ed4952c548225913ac2f89"; // 여기에 클라이언트 ID를 넣으세요

  const handleKakaoLogin = () => {
    const redirectUri = "https://tripguard.netlify.app/tutorial";
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile_nickname`;

    window.location.href = kakaoAuthUrl;
  };

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const code = getQueryParam("code");
    if (code) {
      // 받은 인가 코드를 API 서버에 전달
      fetch("https://tripguard.netlify.app/api/v1/user/kakao/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }), // 인가 코드를 body에 포함시킴
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // 성공적인 응답 처리
        })
        .catch((error) => {
          console.error("Error:", error);
          // 에러 처리
        });
    }
  }, []);

  return (
    <div className="step-two-container">
      <img src="/imgs/logo2.png" alt="Logo" className="logo" />
      <button onClick={handleKakaoLogin}>
        <img
          src="/imgs/kakao_login.png"
          alt="Kakao Login"
          className="kakao-login"
        />
      </button>
    </div>
  );
};

export default StepTwo;
