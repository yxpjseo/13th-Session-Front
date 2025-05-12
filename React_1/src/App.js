import { useState } from "react";
import Name from "./components/Name";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const lionList = [
    { name: "아기사자", nth: "13", isFE: true },
    { name: "아기사자", nth: "13", isFE: false },
    { name: "아기사자", nth: "13", isFE: true },
  ];
  //데이터셋은 자유롭게 추가 및 변경이 가능합니다! 다양한 데이터를 만들어 띄워보세요 :)

  {
    lionList.map((lion, index) => (
      <Name key={index} name={lion.name} nth={lion.nth} isFE={lion.isFe} />
    ));
  }

  return (
    <>
      <Name name="아기사자" nth="13" isFE="true" />
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
      //modal값이 true라면 Modal.js의 setModal(true) 전달 //JSX 내부에 js함수를
      보여줘야할 때는 {}로 감싸기
    </>
  );
}

export default App;
