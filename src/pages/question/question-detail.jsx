import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../../styles/color.css";
import Header from "../../components/question/question-list/Header";
import Detail from "../../components/question/question-detail/Detail";
import Footer from "../../components/question/question-list/Footer";

const QuestionDetail = () => {
  const { index } = useParams();

  return (
    <Wrapper>
      <Detail selectedQuestionIndex={index} />
    </Wrapper>
  );
};

export default QuestionDetail;

const Wrapper = styled.div`
  background-color: var(--red-600);
  height: 100%;
`;
