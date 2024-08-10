import React from "react";

const Purchase = () => {
  const startQrcode = () => {
    if (window.AppScript && window.AppScript.startQrcode) {
      window.AppScript.startQrcode();
    } else {
      console.warn("AppScript or startQrcode is not available");
    }
  };

  return (
    <div>
      <h1>결제하기</h1>
      <button onClick={startQrcode}>QR 코드 시작하기</button>
    </div>
  );
};

export default Purchase;
