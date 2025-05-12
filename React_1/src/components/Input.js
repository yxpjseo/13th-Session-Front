import { useState } from "react";

const Input = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nth: "",
  });
  const { name, nth } = inputs;
  //구조분해 할당 inputs.*이 아니라 그냥 쓰기 위해서

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    //setInputs({name:"", nth:""})로 상태 업데이트
  };
  const onReset = () => {
    setInputs({
      name: "",
      nth: "",
    });
  };
  return (
    <div>
      <hr />
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nth" placeholder="기수" onChange={onChange} value={nth} />
      <button onClick={onReset}>초기화</button>
      <h2>
        값:{name} ({nth})
      </h2>
    </div>
  );
};
export default Input;
