import styled from "styled-components";

const Modal = ({ setModal }) => {
  const style = {
    width: "100px",
    height: "100px",
    display: "flex",
  };

  const deleteModal = () => {
    setModal(false);
  };
  return (
    <>
      <div style={style}>
        <button onClick={deleteModal}>모달 삭제</button>
      </div>
    </>
  );
};
export default Modal;
