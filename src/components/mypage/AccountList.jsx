import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountList.css";

const accountsData = [
  {
    bank: "국민은행",
    accountNumber: "123456-78-901234",
    logo: "/imgs/kb_bank.png",
  },
  {
    bank: "우리은행",
    accountNumber: "123456-78-901234",
    logo: "/imgs/woori_bank.png",
  },
];

const AccountList = () => {
  const [accounts, setAccounts] = useState(accountsData);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveClick = (account) => {
    setSelectedAccount(account);
    setIsModalOpen(true);
  };

  const handleRemoveConfirm = () => {
    setAccounts(accounts.filter((account) => account !== selectedAccount));
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="account-list-wrapper">
      <div className="account-list-header">
        <Link to="/info" className="back-icon">
          &lt;
        </Link>
        <span>등록 계좌 확인</span>
      </div>
      <div className="account-list-content">
        {accounts.map((account, index) => (
          <div key={index} className="account-item">
            <img src={account.logo} alt={`${account.bank} Logo`} />
            <div className="account-details">
              <span>{account.bank}</span>
              <span>{account.accountNumber}</span>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveClick(account)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>계좌를 삭제하시겠습니까?</p>
            <div className="modal-buttons">
              <button onClick={handleRemoveConfirm} className="confirm-button">
                예
              </button>
              <button onClick={handleModalClose} className="close-button">
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountList;
