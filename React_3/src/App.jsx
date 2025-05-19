import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;
