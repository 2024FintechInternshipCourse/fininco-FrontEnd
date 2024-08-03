import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreTabs from "../../components/store/store-tabs";
import "../../styles/color.css";

const StoreObject = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    switch (tab) {
      case "background":
        navigate("/store-background");
        break;
      case "object":
        navigate("/store-object");
        break;
      default:
        navigate("/store-tree");
    }
  };

  // 카드 배열로 추가
  const objects = ["선물상자", "강아지", "고양이"];

  return (
    <Wrapper>
      <StoreTabs activeTab="object" onTabClick={handleTabClick} />
      <Content>
        <Section>
          <SectionTitle>오브제</SectionTitle>
          <CardList>
            {objects.map((cardText, index) => (
              <Card key={index}>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
          </CardList>
        </Section>
      </Content>
    </Wrapper>
  );
};

export default StoreObject;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 56.25vh;
  height: 100vh;
  background-color: var(--gray-50);
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: var(--gray-900);
  margin-bottom: 15px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 10px);
  background-color: var(--gray-400);
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--gray-400);
`;

const CardText = styled.div`
  font-size: 10px;
  color: var(--gray-900);
`;
