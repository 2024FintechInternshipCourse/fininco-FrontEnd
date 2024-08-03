import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LocationSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // 검색 로직 추가 (API 호출 등)
    // 예시로 하드코딩된 결과를 사용
    setSearchResults(["서울", "부산", "제주도", "강릉", "경주"]);
  };

  const handleSelectLocation = (location) => {
    // 선택된 장소를 이전 페이지로 전달
    navigate("/storage-gallery/write", {
      state: { selectedLocation: location },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => navigate(-1)}>X</Button>
        <Title>장소 검색</Title>
        <div />
      </Header>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="장소를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={handleSearch}>🔍</SearchButton>
      </SearchContainer>
      <SearchResults>
        {searchResults.map((result, index) => (
          <Result key={index} onClick={() => handleSelectLocation(result)}>
            {result}
          </Result>
        ))}
      </SearchResults>
    </Wrapper>
  );
};

export default LocationSearch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: var(--gray-50);
  padding: 0 20px;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  margin: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px 0 0 8px;
`;

const SearchButton = styled.button`
  padding: 8.5px;
  font-size: 16px;
  background-color: var(--gray-50);
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
`;

const SearchResults = styled.div`
  flex: 1;
  padding: 20px;
`;

const Result = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
