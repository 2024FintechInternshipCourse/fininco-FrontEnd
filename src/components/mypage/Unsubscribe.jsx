import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Unsubscribe.css";

const Unsubscribe = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    navigate("/mypage");
  };

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFinalConfirm = () => {
    navigate("/tutorial");
  };

  return (
    <div className="unsubscribe-container">
      <div className="header">
        <h1 className="unsubscribe-title">탈퇴하기</h1>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
      </div>
      <div className="unsubscribe-content">
        <ol>
          <li>
            여러분은 언제든지 [서비스명] 서비스의 마이페이지 또는 고객센터를
            통하여 회원탈퇴를 할 수 있으며 회사는 특별한 사정이 없는 한 이를
            지체없이 처리하겠습니다.
          </li>
          <li>
            회원탈퇴가 완료되는 경우, 여러분의 개인정보 중 관련 법령에 따라 보유
            의무가 있는 정보를 제외한 개인정보를 지체없이 삭제하겠습니다.
          </li>
          <li>
            여러분이 한번 회원탈퇴를 하신 경우, 1주일의 유예 기간 동안 다시 회원
            상태를 복구할 수 있습니다.
          </li>
          <li>
            여러분이 한번 회원탈퇴를 하신 경우, 서비스 운영정책에서 정하는 바에
            따라 [서비스명] 서비스에 다시 가입하는 것이 제한될 수 있습니다.
          </li>
          <li>
            회사는 본 조에 따라 이용제한을 하는 경우 여러분은 이용제한의 철회를
            요청할 수 있으며,
          </li>
          <li>
            여러분의 회원 자격이 본 조에 따라 박탈되는 경우, 회사는 관련 법령 및
            개인정보처리방침에 따라 보유하는 여러분의 정보를 제외한 여러분의
            계정에 등록된 정보 일체 등을 삭제합니다.
          </li>
        </ol>
      </div>
      <div className="unsubscribe-buttons">
        <button className="cancel-button" onClick={handleClose}>
          아니요
        </button>
        <button className="confirm-button" onClick={handleConfirmClick}>
          네, 탈퇴하겠습니다
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>정말로 탈퇴하시겠습니까?</p>
            <div className="modal-buttons">
              <button className="modal-button" onClick={handleModalClose}>
                아니요
              </button>
              <button className="modal-button" onClick={handleFinalConfirm}>
                예
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Unsubscribe;
