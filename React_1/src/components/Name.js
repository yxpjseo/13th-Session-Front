import React from "react";

const Name = ({ name, nth, isFE }) => {
  return (
    <>
      <Wrapper isFE={isFE}>
        {nth}기 프론트엔드 {name}입니다.
      </Wrapper>
    </>
  );
};
export default Name;

const Wrapper = styled.div`
  background-color: black;
  color: ${({ isFE }) => (isFE ? "orange" : "green")};
`;
