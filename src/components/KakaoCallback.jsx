import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate를 사용합니다.

const KakaoCallback = () => {
  const navigate = useNavigate(); // useHistory() 대신 useNavigate()를 사용합니다.

  useEffect(() => {
    // 예시로, 특정 조건에 따라 리디렉션합니다.
    const accessToken = new URL(window.location.href).searchParams.get(
      "access_token"
    );

    if (accessToken) {
      // accessToken이 존재하면 홈으로 리디렉션
      navigate("/");
    } else {
      // 그렇지 않으면 로그인 페이지로 리디렉션
      navigate("/login");
    }
  }, [navigate]);

  return <div>카카오 로그인 콜백 처리 중...</div>;
};

export default KakaoCallback;
