import React, { useEffect, useState } from "react";
import Router from "./Router";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import LoadingScreen from "./components/common/loading-screen";
import { RouterProvider } from "react-router-dom";

function App() {
  const [isLoding, setLoading] = useState(false);
  const init = async () => {};
  useEffect(() => {
    init();
  }, []);
  return (
    <AppContainer>
      <GlobalStyle />
      {isLoding ? <LoadingScreen /> : <RouterProvider router={Router} />}
    </AppContainer>
  );
}
const AppContainer = styled.div`
  width: 100%;
  padding: 0px 10px;
  // max-width: 56.25vh;
  max-width: 56.25vh;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  background-color: white;
`;

export default App;
