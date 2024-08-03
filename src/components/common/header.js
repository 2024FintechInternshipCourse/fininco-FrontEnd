import styled from "styled-components";
import "../../styles/color.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  return <Wrapper>header</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 8vh;
  background-color: var(--gray-200);
`;
