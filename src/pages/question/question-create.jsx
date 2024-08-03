import styled from "styled-components";
import { ReactComponent as QuestionIcon } from "../../assets/icons/question.svg";
import { ReactComponent as PreviousIcon } from "../../assets/icons/previous.svg";
import "../../styles/color.css";
import { useNavigate } from "react-router-dom";
import QGuide from "../../components/question/question-create/q-guide";
import { useState } from "react";
const familyList = ["김아빠", "최엄마", "김언니"];

export default function QuestionCreate() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [respondents, setRespondents] = useState(familyList);
  const [viewers, setViewers] = useState(familyList);
  const [question, setQuestion] = useState("");
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const onCheckClick = (e) => {
    if (!e.target.checked) {
      e.target.className === "respondent"
        ? setRespondents(respondents.filter((el) => el !== e.target.value))
        : setViewers(viewers.filter((el) => el !== e.target.value));
    } else {
      e.target.className === "respondent"
        ? setRespondents([...respondents, e.target.value])
        : setViewers([...viewers, e.target.value]);
    }
  };
  const onInputChange = (e) => {
    setQuestion(e.target.value);
  };
  const onSubmit = () => {
    console.log("question:", question);
    console.log("respondents:", respondents);
    console.log("viewers:", viewers);
  };
  return (
    <Wrapper>
      <Header>
        <PreviousIcon onClick={() => navigate(-1)} />
        <div className="title">스스로 질문 만들기</div>
      </Header>
      <Input
        value={question}
        onChange={onInputChange}
        placeholder="질문을 적어보세요"
      />
      <Button onClick={handleClick}>
        <QuestionIcon />
        <div>질문 가이드</div>
      </Button>
      <SelectionWrapper>
        <div className="title">답변자 선택</div>
        <div className="check-list">
          {familyList.map((el, key) => (
            <SelectionBox key={key}>
              <input
                className="respondent"
                onClick={onCheckClick}
                defaultChecked={true}
                type="checkbox"
                value={el}
              />
              <label>{el}</label>
            </SelectionBox>
          ))}
        </div>
      </SelectionWrapper>
      <SelectionWrapper>
        <div className="title">보이기 선택</div>
        <div className="check-list">
          {familyList.map((el, key) => (
            <SelectionBox key={key}>
              <input
                className="viewer"
                onClick={onCheckClick}
                defaultChecked={true}
                type="checkbox"
                value={el}
              />
              <label>{el}</label>
            </SelectionBox>
          ))}
        </div>
      </SelectionWrapper>
      <SubmitBtn onClick={onSubmit}>생성하기</SubmitBtn>
      {isClicked ? (
        <PopUpWrapper>
          <button onClick={handleClick}>닫기</button>
          <QGuide handleClick={handleClick} setQuestion={setQuestion} />
        </PopUpWrapper>
      ) : null}
    </Wrapper>
  );
}
const PopUpWrapper = styled.div`
  @keyframes Position {
    from {
      bottom: -90%;
    }
    to {
      bottom: -10%;
    }
  }
  position: absolute;
  bottom: -8vh;
  width: 100%;
  height: 100%;
  background-color: var(--gray-200);
  border-radius: 30px 30px 0 0;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 10px;
  animation: ease-out 0.3s Position;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;
const SubmitBtn = styled.div`
  width: 50%;
  margin-top: 30px;
  background-color: var(--pink-main);
  color: white;
  font-size: 20px;
  display: flex;
  padding: 15px;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const SelectionBox = styled.form`
  display: flex;
  align-items: center;
  input {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    &:checked::before {
      background-color: red;
    }
  }
`;
const SelectionWrapper = styled.div`
  border-bottom: 1px solid var(--gray-600);
  padding: 20px 0;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: start;
  .check-list {
    display: flex;
    gap: 20px;
  }
`;
const Input = styled.textarea`
  margin-bottom: 15px;
  width: 90%;
  height: 30%;
  border-radius: 20px;
  padding: 30px 40px;
  resize: none;
  font-size: 16px;
  font-family: "Pretendard";
  border: none;
  box-shadow:
    rgb(204, 219, 232) 2px 2px 2px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  &::placeholder {
    color: var(--gray-400);
    font-size: 16px;
    letter-spacing: -1px;
  }
  &:focus {
    /* outline: 1px solid var(--pink-main); */
    outline: none;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .title {
    color: var(--pink-main);
    font-size: 22px;
    letter-spacing: -1px;
  }
  svg {
    position: absolute;
    width: 24px;
    left: 0;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f6e7e0;
  padding: 0 20px;
  letter-spacing: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
`;
const Button = styled.button`
  font-size: 16px;
  letter-spacing: -1px;
  padding: 5px 10px;
  background-color: #fef5f1;
  border-radius: 15px;
  color: var(--gray-600);
  display: flex;
  align-items: center;
  /* justify-content:space-between; */
  svg {
    margin-right: 10px;
    width: 30px;
    stroke-width: 1px;
    color: var(--pink-main);
  }
`;
