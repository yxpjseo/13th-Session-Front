import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);

    // 무엇을 추가해줘야 할까요?
  }, []);

  return (
    <>
      <span>타이머 시작! 콘솔을 보시오~</span>
    </>
  );
};

export default Timer;
