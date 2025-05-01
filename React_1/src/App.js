import { useState } from "react";
import Name from "./components/Name";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Name name="아기사자" nth="13" isFE="true" />
      <Input />
    </>
  );
}

export default App;
