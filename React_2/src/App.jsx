import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 1. 렌더링마다 매번 실행
  useEffect(() => {
    console.log("1. 렌더링");
  });
  // 2. 마운팅 + count 변경될 때마다 실행
  useEffect(() => {
    console.log("2. count 변화");
  }, [count]);
  // 3. 마운팅 + name 변경될 때마다 실행
  useEffect(() => {
    console.log("3. name 변화");
  }, [name]);
  // 4. 마운팅만 (맨처음 랜더링 때만)
  useEffect(() => {
    console.log("4. 마운팅만");
  }, []);
  return (
    <>
      <button onClick={handleCountUpdate}>클릭</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </>
  );
}

export default App;
