import React, { useEffect } from "react";
import "./StepTwo.css";

const StepTwo = () => {
  const handleKakaoLogin = () => {
    const clientId = "f085cf45c0ed4952c548225913ac2f89"; // 카카오에서 발급받은 앱의 REST API 키
    const redirectUri = "https://tripguard.netlify.app/tutorial"; // 카카오 인증 후 돌아올 콜백 URL (공백 제거)
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
      // Send the code to your API server
      fetch("https://tripguard.netlify.app/api/v1/user/kakao/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // Handle successful response
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error
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
