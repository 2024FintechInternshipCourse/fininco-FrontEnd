import React, { useState } from "react";
import styled from "styled-components";

const StepFour = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleCheckAll = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setCheckedItems(checkedItems.map(() => newAllChecked));
  };

  const handleCheckItem = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    setAllChecked(newCheckedItems.every((item) => item));
  };

  const handleOpenModal = (index) => {
    if (index === 1) {
      setModalContent(
        <ModalText>
          <h2>이용 약관</h2>
          <h3>[필수] 개인정보 수집이용 동의</h3>
          <p>
            개인정보 수집과 이용에 관한 동의를 받고자 합니다. 아래 보기에서 동의
            여부를 선택해 주세요.
          </p>
          <p>수집하는 자: (주)트립가드</p>
          <ul>
            <li>개인정보 수집 및 이용 목적: 서비스 제공</li>
            <li>수집하는 개인정보 항목: 이름, 연락처</li>
            <li>개인정보 보유 및 이용 기간: 탈퇴 시까지</li>
          </ul>
        </ModalText>
      );
    } else if (index === 2) {
      setModalContent(
        <ModalText>
          <h2>이용 약관</h2>
          <h3>[선택] 개인정보 취급 위탁 동의</h3>
          <p>
            본인 확인 서비스 제공을 위해 개인정보 취급 위탁 동의를 받고자
            합니다. 아래 보기에서 동의 여부를 선택해 주세요.
          </p>
          <ul>
            <li>수탁자: (주)트립가드</li>
            <li>
              개인정보 수집 및 이용 목적: 회원가입 등에 필요한 본인 확인 서비스
              제공
            </li>
            <li>수집하는 개인정보 항목: 이름, 연락처</li>
            <li>개인정보 보유 및 이용 기간: 수집 일로부터 3년</li>
          </ul>
        </ModalText>
      );
    } else if (index === 3) {
      setModalContent(
        <ModalText>
          <h2>이용 약관</h2>
          <h3>[선택] 개인정보 제 3자 제공 동의</h3>
          <p>
            여행 상품 할인 프로모션 안내를 위해 개인정보 제3자 제공 동의를
            받고자 합니다. 아래 보기에서 동의 여부를 선택해 주세요.
          </p>
          <ul>
            <li>제공 받는 자: (주)트립가드</li>
            <li>
              개인정보 제공 및 이용 목적: 여행 상품 할인 프로모션 등 마케팅
              서비스 제공
            </li>
            <li>제공하는 개인정보 항목: 이름, 연락처, 이메일 주소</li>
            <li>개인정보 보유 및 이용 기간: 수집 일로부터 300일</li>
          </ul>
        </ModalText>
      );
    } else {
      setModalContent(
        <ModalText>
          <h2>이용 약관</h2>
          <h3>[필수] 트립가드 이용약관</h3>
          <p>
            제1조 (목적) 본 약관은 "트립가드" 서비스(이하 "서비스"라 한다)의
            이용에 관한 조건 및 절차, 이용자와 서비스 제공자 간의 권리와 의무를
            규정함을 목적으로 합니다.
          </p>
          <p>
            제2조 (정의)
            <br />
            1. 서비스 제공자: "트립가드" 앱을 운영하는 회사.
            <br />
            2. 이용자: "트립가드" 서비스를 이용하는 개인 또는 법인.
            <br />
            3. 회원: 서비스에 가입하여 이용자 ID를 부여받은 자.
            <br />
            4. 비회원: 서비스에 가입하지 않고 이용하는 자.
            <br />
            5. 콘텐츠: 서비스 내에서 제공되는 모든 정보, 데이터, 텍스트, 이미지,
            소프트웨어 등을 포함합니다.
          </p>
          <p>
            제3조 (이용자의 의무)
            <br />
            1. 이용자는 서비스 이용 시 타인의 권리를 침해하지 않도록 주의하여야
            하며, 서비스 이용 중 발생하는 모든 책임은 이용자에게 있습니다.
            <br />
            2. 이용자는 서비스 이용을 위해 제공한 정보가 정확하고 최신임을
            보장해야 합니다.
          </p>
          <p>
            제4조 (서비스 제공자의 권리)
            <br />
            1. 서비스 제공자는 약관을 개정할 수 있으며, 변경 사항은 사전 공지 후
            시행합니다.
            <br />
            2. 서비스 제공자는 서비스의 중단이나 변경에 대한 권한을 가집니다.
          </p>
          <p>
            제5조 (개인정보 보호)
            <br />
            1. 서비스 제공자는 이용자의 개인정보를 수집, 이용, 보관 및 파기하는
            방법을 명시합니다.
            <br />
            2. 이용자는 자신의 개인정보에 대한 열람, 정정, 삭제 요청을 할 수
            있습니다.
          </p>
          <p>
            제6조 (이용 요금 및 결제)
            <br />
            1. 서비스 이용에 따른 요금은 서비스 내에서 명시하며, 결제 방법 및
            환불 정책을 적용합니다.
            <br />
            2. 환불 방침은 서비스 이용 시 발생하는 수수료에 대한 안내를
            포함합니다.
          </p>
          <p>
            제7조 (책임 제한)
            <br />
            1. 서비스 제공자는 이용자의 서비스 이용으로 인해 발생한 손해에 대해
            책임을 지지 않습니다.
            <br />
            2. 서비스 제공자는 천재지변, 불가항력적인 사유로 인한 서비스 중단에
            대해 책임을 지지 않습니다.
          </p>
          <p>
            제8조 (분쟁 해결)
            <br />
            1. 서비스 이용 중 발생하는 분쟁에 대한 해결 방법은 서비스 제공자가
            정한 절차에 따릅니다.
            <br />
            2. 분쟁에 대해 서비스 제공자와 분사가 위치한 지역의 법을 준거법으로
            합니다.
          </p>
          <p>
            제9조 (시행일)
            <br />본 약관은 2024년 1월 19일부터 시행됩니다.
          </p>
        </ModalText>
      );
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFinish = () => {
    if (!checkedItems[0] || !checkedItems[1]) {
      setShowWarning(true);
    } else {
      // Proceed with the next step or submission
      alert("모든 필수 항목이 체크되었습니다.");
    }
  };

  return (
    <Container>
      <Title>서비스 이용에 동의해주세요.</Title>
      <ConsentList>
        <ConsentItem onClick={() => handleCheckItem(0)}>
          <CheckMark checked={checkedItems[0]}>✔</CheckMark>
          <Text>
            (필수) 트립가드 이용약관 동의
            <DetailButton onClick={() => handleOpenModal(0)}>
              내용 상세 보기
            </DetailButton>
          </Text>
        </ConsentItem>
        <ConsentItem onClick={() => handleCheckItem(1)}>
          <CheckMark checked={checkedItems[1]}>✔</CheckMark>
          <Text>
            (필수) 개인정보 수집이용 동의
            <DetailButton onClick={() => handleOpenModal(1)}>
              내용 상세 보기
            </DetailButton>
          </Text>
        </ConsentItem>
        <ConsentItem onClick={() => handleCheckItem(2)}>
          <CheckMark checked={checkedItems[2]}>✔</CheckMark>
          <Text>
            (선택) 개인정보 취급 위탁 동의
            <DetailButton onClick={() => handleOpenModal(2)}>
              내용 상세 보기
            </DetailButton>
          </Text>
        </ConsentItem>
        <ConsentItem onClick={() => handleCheckItem(3)}>
          <CheckMark checked={checkedItems[3]}>✔</CheckMark>
          <Text>
            (선택) 개인정보 제 3자 제공 동의
            <DetailButton onClick={() => handleOpenModal(3)}>
              내용 상세 보기
            </DetailButton>
          </Text>
        </ConsentItem>
      </ConsentList>
      <Notice>
        귀하께서는 동의하지 않을 권리가 있습니다. (필수) 항목의 경우 동의하지
        않을 시, 서비스 이용이 제한됨을 알려드립니다.
      </Notice>
      <CheckAllContainer onClick={handleCheckAll}>
        <CheckMark checked={allChecked}>✔</CheckMark>
        <CheckAllText>전체동의</CheckAllText>
      </CheckAllContainer>

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>✕</CloseButton>
            {modalContent}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default StepFour;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  position: relative;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const ConsentList = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  height: 30vh;
`;

const ConsentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckMark = styled.span`
  font-size: 18px;
  color: ${(props) => (props.checked ? "#72e4eb" : "#989898")};
  margin-top: 15px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 10px;
  font-size: 14px;
  margin-top: 15px;
`;

const DetailButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`;

const Notice = styled.p`
  font-size: 12px;
  color: #2e78bc;
  margin-bottom: 20px;
`;

const CheckAllContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CheckAllText = styled.span`
  margin-left: 10px;
  margin-top: 15px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 50vh;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalText = styled.div`
  font-size: 14px;
  color: #333;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 10px;
  }

  ul {
    margin-left: 20px;
    list-style-type: disc;
  }
`;
