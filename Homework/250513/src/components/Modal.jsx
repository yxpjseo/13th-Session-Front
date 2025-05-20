import styled from "styled-components";

const Modal = ({ setModal }) => {
  const deleteModal = () => {
    setModal(false);
  };

  return (
    <>
      <Wrapper onClick={deleteModal}>
        <Container onClick={(e) => e.stopPropagation()}>
          <Text>모달창</Text>
        </Container>
      </Wrapper>
    </>
  );
};
export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 35rem;
  height: 12rem;
  display: flex;
  background-color: lavenderblush;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

const Text = styled.div`
  text-align: center;
  line-height: 150%;
  font-size: 2rem;
  color: palevioletred;
  font-weight: bold;
`;
