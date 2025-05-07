import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </div>
  );
};
export default Counter;
