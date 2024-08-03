import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

import WriteHeader from "../../components/memory-storage/write-header";
import WriteFooter from "../../components/memory-storage/write-footer";
import TitlePeopleInput from "../../components/memory-storage/write-input-titlepeople";

const StorageGalleryWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [content, setContent] = useState("");

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDates([start, end]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 작성된 글 데이터를 처리하는 로직 추가
    console.log({ title, people, location, dates, content });
  };

  const handleLocationClick = () => {
    navigate("/storage/write/location"); // 장소 검색 페이지로 이동
  };

  return (
    <Wrapper>
      <WriteHeader onSubmit={handleSubmit} />
      <Form>
        <TitlePeopleInput
          title={title}
          setTitle={setTitle}
          people={people}
          setPeople={setPeople}
        />
        <Input
          type="text"
          placeholder=" 장소 추가 >"
          value={location}
          onClick={handleLocationClick} // 클릭 이벤트 핸들러
          readOnly
        />
        <DatePickerWrapper>
          <DatePicker
            selected={dates[0]}
            onChange={handleDateChange}
            startDate={dates[0]}
            endDate={dates[1]}
            selectsRange
            locale={ko}
            customInput={<DateInput />}
          />
        </DatePickerWrapper>
        <Textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form>
      <WriteFooter />
    </Wrapper>
  );
};

export default StorageGalleryWrite;

const DateInput = React.forwardRef(({ value, onClick }, ref) => (
  <StyledDateInput onClick={onClick} ref={ref}>
    {value} 📅
  </StyledDateInput>
));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 8vh - 8vh);
`;

const Input = styled.input`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
`;

const DatePickerWrapper = styled.div`
  .react-datepicker {
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`;
const StyledDateInput = styled.div`
  margin: 1px 0;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 15px;
  resize: none;

  &:focus {
    border-color: #ddd;
    outline: none;
    border-radius: 0;
  }
`;
