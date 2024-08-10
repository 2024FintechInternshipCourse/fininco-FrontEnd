import React from "react";
import "./StepThree.css";

const StepThree = () => {
  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());

      alert("카메라 접근이 허용되었습니다.");
    } catch (error) {
      alert("카메라 접근이 거부되었습니다.");
    }
  };

  return (
    <div className="step-three-container">
      <h1 className="title">앱 접근 권한 확인</h1>
      <p className="description">
        트릴카드 ‘QR 결제’ 기능을 위해 다음과 같은 접근 권한을 필요로 하오니,
        해당 기능 이용을 위해 권한을 허용해 주시기 바랍니다.
      </p>
      <div className="permissions">
        <p className="permissions-title">• 선택적 접근 권한</p>
        <div className="permission-item">
          <img
            src="/imgs/camera.png"
            alt="Camera"
            className="permission-icon"
          />
          <div className="permission-details">
            <p className="permission-title">카메라</p>
            <p className="permission-description">
              • QR 결제 시, 스캔 기능을 위한 촬영 권한
            </p>
          </div>
        </div>
      </div>
      <button className="confirm-button" onClick={requestCameraAccess}>
        확인
      </button>
    </div>
  );
};

export default StepThree;
